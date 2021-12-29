resource "aws_iam_role" "lambda_role" {
  name               = "historical_event_queue_lambda_processor_${var.globals[terraform.workspace].resource_suffix}"
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
  name        = "historical_event_queue_lambda_processor_${var.globals[terraform.workspace].resource_suffix}"
  tags        = var.globals.tags
  path        = "/"
  description = "historical lambda event queue processor"
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
    },    
    {
      "Action": [
        "sqs:ReceiveMessage",
        "sqs:DeleteMessage",
        "sqs:GetQueueAttributes"
      ],
      "Resource": "${var.ingestion_ingress_sqs_historical_fifo_queue.arn}",
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
  architectures    = ["arm64"]
  publish          = true

  environment {
    variables = {
      REGION            = "us-east-1"
      ENV               = "${var.globals[terraform.workspace].resource_suffix}"
      HISTORICAL_QUEUE  = var.ingestion_ingress_sqs_historical_fifo_queue.arn
      BLOCK_EVENT_QUEUE = var.ingestion_ingress_block_event_fifo_queue.arn
    }
  }

  depends_on = [aws_iam_role_policy_attachment.lambda_policy_attach]
}

resource "aws_lambda_event_source_mapping" "queue_event_trigger" {
  event_source_arn = var.ingestion_ingress_sqs_historical_fifo_queue.arn
  function_name    = aws_lambda_function.lambda.arn
}
