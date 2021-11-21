resource "aws_iam_role" "lambda_role" {
  name               = "request_payloard_transformer_${var.globals[terraform.workspace].resource_suffix}"
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
  name        = "request_payloard_transformer_${var.globals[terraform.workspace].resource_suffix}"
  tags        = var.globals.tags
  path        = "/"
  description = "lambda request payload transform"
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
  source_file = "${path.module}/../../../../lambda_request_payload_transformer/index.js"
  output_path = "${path.module}/../../../../lambda_request_payload_transformer/handler.zip"
}

resource "aws_lambda_function" "lambda" {
  function_name = "request_payloard_transformer_${var.globals[terraform.workspace].resource_suffix}"
  tags          = var.globals.tags
  filename      = "${path.module}/../../../../lambda_request_payload_transformer/handler.zip"
  role          = aws_iam_role.lambda_role.arn
  handler       = "index.lambda_handler"
  runtime       = "nodejs14.x"
  publish       = true
  depends_on    = [aws_iam_role_policy_attachment.lambda_policy_attach]
}
