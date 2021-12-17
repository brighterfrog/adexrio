
resource "aws_iam_role" "step_function_role" {
  name               = "historical_step_function_role_${var.globals[terraform.workspace].resource_suffix}"
  assume_role_policy = <<-EOF
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Action": "sts:AssumeRole",
        "Principal": {
          "Service": "states.amazonaws.com"
        },
        "Effect": "Allow",
        "Sid": "StepFunctionHistoricalAssumeRole"
      }
    ]
  }
  EOF
}

resource "aws_iam_role_policy" "step_function_policy" {
  name = "historical_step_function_policy_${var.globals[terraform.workspace].resource_suffix}"
  role = aws_iam_role.step_function_role.id

  policy = <<-EOF
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Action": [
          "lambda:InvokeFunction"
        ],
        "Effect": "Allow",
        "Resource": "*"
      },
      {
        "Action": [
          "logs:*"
        ],
        "Effect": "Allow",
        "Resource": "*"
      }
    ]
  }
  EOF
}

resource "aws_sfn_state_machine" "historical_step_function_state_machine" {
  name     = "historical_step_function_state_machine_${var.globals[terraform.workspace].resource_suffix}"
  role_arn = aws_iam_role.step_function_role.arn

  definition = <<EOF
{
  "Comment": "A Hello World example of the Amazon States Language using Pass states",
  "StartAt": "Hello",
  "States": {
    "CallGetLowestBlockLambda": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:us-east-1:123456789012:function:FailFunction",
      "Next": "Hello",
      "Retry": [ {   
            "ErrorEquals": ["States.TaskFailed"]        
            "IntervalSeconds": 1
         } ]
    },
    "Hello": {
      "Type": "Pass",
      "Next": "World"
    },
    "World": {
      "Type": "Pass",
      "Result": "World",
      "End": true
    },
    "CatchAllFallback": {
         "Type": "Pass",
         "Result": "This is a fallback from any error code",
         "End": true
      }
  }
}
EOF

}


resource "aws_iam_role" "lambda_role" {
  name               = "event_queue_lambda_processor_${var.globals[terraform.workspace].resource_suffix}"
  tags               = var.globals.tags
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}
resource "aws_iam_policy" "lambda_policy" {
  name        = "historical_step_fn_get_lowest_block_${var.globals[terraform.workspace].resource_suffix}"
  tags        = var.globals.tags
  path        = "/"
  description = "Step fn lambda to get the lowest block number from a batch of messages in queue when the lambda triggers"
  policy      = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:*",
      "Effect": "Allow"
    }         
  ]
}
EOF
}
resource "aws_iam_role_policy_attachment" "lambda_policy_attach" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = aws_iam_policy.lambda_policy.arn
}

data "archive_file" "lambda_zip" {
  type        = "zip"
  source_dir  = "${path.module}/../../../../../lambda_historical_event_processor/"
  output_path = "${path.module}/../../../../../lambda_historical_event_processor/handler.zip"
  excludes = [
    "test/*",
    "handler.zip",
  ]
}
resource "aws_lambda_function" "lambda" {
  function_name    = "historical_event_processor_${var.globals[terraform.workspace].resource_suffix}"
  tags             = var.globals.tags
  filename         = "${path.module}/../../../../../lambda_historical_event_processor/handler.zip"
  source_code_hash = filebase64sha256(data.archive_file.lambda_zip.output_path)
  role             = aws_iam_role.lambda_role.arn
  handler          = "index.handler"
  runtime          = "nodejs14.x"
  publish          = true

  environment {
    variables = {
      stateMachineArnHistorical = "${var.historical_step_function_state_machine_arn}"
      REGION = "us-east-1"
      ENV = "${var.globals[terraform.workspace].resource_suffix}"
    }
  }

  depends_on       = [aws_iam_role_policy_attachment.lambda_policy_attach]
}

resource "aws_lambda_event_source_mapping" "queue_event_trigger" {
  event_source_arn = var.ingestion_ingress_sqs_historical_fifo_queue.arn
  function_name    = aws_lambda_function.lambda.arn
}