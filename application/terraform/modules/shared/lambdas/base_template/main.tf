resource "aws_iam_role" "lambda_role" {
  name               = "${var.lambda_name}_${var.globals[terraform.workspace].resource_suffix}"
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
  name        = "${var.lambda_name}_${var.globals[terraform.workspace].resource_suffix}"
  tags        = var.globals.tags
  path        = "/"
  description = var.lambda_description
  policy      = var.lambda_iam_aws_policy_document_json
}
resource "aws_iam_role_policy_attachment" "lambda_attachment" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = aws_iam_policy.lambda_policy.arn
}

data "archive_file" "lambda_zip" {
  type        = "zip"
  source_dir  = "${path.module}/../../../../../${var.lambda_directory_name}/"
  output_path = "${path.module}/../../../../../${var.lambda_directory_name}/handler.zip"
  excludes = [
    "test/*",
    "handler.zip",
  ]
}
resource "aws_lambda_function" "lambda" {
  function_name    = "${var.lambda_name}_${var.globals[terraform.workspace].resource_suffix}"
  tags             = var.globals.tags
  filename         = "${path.module}/../../../../../${var.lambda_directory_name}/handler.zip"
  source_code_hash = filebase64sha256(data.archive_file.lambda_zip.output_path)
  role             = aws_iam_role.lambda_role.arn
  handler          = "index.handler"
  runtime          = "nodejs14.x"
  publish          = true
  timeout          = var.lambda_timeout_in_seconds
  architectures    = ["arm64"]
  description      = var.lambda_description

  environment {
    variables = var.environment_variables
  }

  depends_on = [aws_iam_role_policy_attachment.lambda_attachment]
}