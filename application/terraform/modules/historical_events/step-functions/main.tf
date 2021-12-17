
resource "aws_iam_role" "step_function_role" {
  name               = "historical_step_fn_${var.globals[terraform.workspace].resource_suffix}"
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
  name = "historical_step_function_state_machine_${var.globals[terraform.workspace].resource_suffix}"
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

resource "aws_cloudwatch_log_group" "log_group_for_historical_step_function_state_machine" {
  name = "/step_functions/historical_step_function_state_machine_${var.globals[terraform.workspace].resource_suffix}"

  tags = var.tags
}

resource "aws_sfn_state_machine" "historical_step_function_state_machine" {
  name     = "historical_step_function_state_machine_${var.globals[terraform.workspace].resource_suffix}"
  role_arn = aws_iam_role.step_function_role.arn

  logging_configuration {
    log_destination        = "${aws_cloudwatch_log_group.log_group_for_historical_step_function_state_machine.arn}:*"
    include_execution_data = true
    level                  = "ALL"
  }

  definition = <<EOF
{
  "Comment": "A Hello World example of the Amazon States Language using Pass states",
  "StartAt": "CallGetLowestBlockLambda",
  "States": {
    "CallGetLowestBlockLambda": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:us-east-1:891289117461:function:${aws_lambda_function.lambda_get_highest_block.function_name}",
      "Next": "Hello",
      "Retry": [ {   
            "ErrorEquals": ["States.TaskFailed"],      
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
    }    
  }
}
EOF

}


resource "aws_iam_role" "lambda_get_highest_block_role" {
  name               = "historical_step_fn_get_highest_block_${var.globals[terraform.workspace].resource_suffix}"
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
resource "aws_iam_policy" "lambda_get_highest_block_policy" {
  name        = "historical_step_fn_get_highest_block_${var.globals[terraform.workspace].resource_suffix}"
  tags        = var.globals.tags
  path        = "/"
  description = "Step fn lambda to get the highest block number from a batch of messages in queue when the lambda triggers"
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
resource "aws_iam_role_policy_attachment" "lambda_get_highest_block_attachment" {
  role       = aws_iam_role.lambda_get_highest_block_role.name
  policy_arn = aws_iam_policy.lambda_get_highest_block_policy.arn
}

data "archive_file" "lambda_get_highest_block_zip" {
  type        = "zip"
  source_dir  = "${path.module}/../../../../lambda_historical_step_fn_get_highest_block/"
  output_path = "${path.module}/../../../../lambda_historical_step_fn_get_highest_block/handler.zip"
  excludes = [
    "test/*",
    "handler.zip",
  ]
}
resource "aws_lambda_function" "lambda_get_highest_block" {
  function_name    = "historical_step_fn_get_highest_block_${var.globals[terraform.workspace].resource_suffix}"
  tags             = var.globals.tags
  filename         = "${path.module}/../../../../lambda_historical_step_fn_get_highest_block/handler.zip"
  source_code_hash = filebase64sha256(data.archive_file.lambda_get_highest_block_zip.output_path)
  role             = aws_iam_role.lambda_get_highest_block_role.arn
  handler          = "index.handler"
  runtime          = "nodejs14.x"
  publish          = true

  environment {
    variables = {     
      REGION = "us-east-1"
      ENV = "${var.globals[terraform.workspace].resource_suffix}"
    }
  }

  depends_on       = [aws_iam_role_policy_attachment.lambda_get_highest_block_attachment]
}
