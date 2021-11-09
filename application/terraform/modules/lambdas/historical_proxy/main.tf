resource "aws_iam_role" "lambda_historical_role" {
 name   = "iam_role_lambda_function_${var.globals[terraform.workspace].resource_suffix}"
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
resource "aws_iam_policy" "lambda_historical_policy" {
  name         = "iam_policy_lambda_logging_function_${var.globals[terraform.workspace].resource_suffix}"
  path         = "/"
  description  = "IAM policy for lambda historical proxy"
  policy = <<EOF
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
resource "aws_iam_role_policy_attachment" "lambda_historical_policy_attach" {
  role        = aws_iam_role.lambda_historical_role.name
  policy_arn  = aws_iam_policy.lambda_historical_policy.arn
}

data "archive_file" "lambda_historical_zip" {
  type          = "zip"
  source_file   = "${path.module}/../../../../lambda_load_historical/index.js"
  output_path   =  "${path.module}/../../../../lambda_load_historical/handler.zip"
}
resource "aws_lambda_function" "lambda_historical_proxy" {
	filename                       = "${path.module}/../../../../lambda_load_historical/handler.zip"
  function_name                  = "historical_proxy_${var.globals[terraform.workspace].resource_suffix}"
  role                           = aws_iam_role.lambda_historical_role.arn
  handler                        = "index.lambda_handler"
  runtime                        = "nodejs14.x"
  publish                        = true
  depends_on                     = [aws_iam_role_policy_attachment.lambda_historical_policy_attach]
}