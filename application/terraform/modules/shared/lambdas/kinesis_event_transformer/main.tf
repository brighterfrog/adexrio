resource "aws_iam_role" "lambda_role" {
  name               = "${var.name}_role_${var.globals[terraform.workspace].resource_suffix}"
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
  name        = "${var.name}_policy_${var.globals[terraform.workspace].resource_suffix}"
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
    },
    {
      "Action": [
        "kinesis:*"       
      ],
      "Resource": "${var.kinesis_data_stream.arn}",
      "Effect": "Allow"
    },
    {
      "Action": [
        "sqs:*"       
      ],
      "Resource": "${aws_sqs_queue.dlq_kinesis_event_transformer.arn}",
      "Effect": "Allow"
    },
    {
      "Action": [
        "s3:*"       
      ],
      "Resource": "${var.stream_ingestion_egress_bucket.arn}/*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "dynamodb:*"       
      ],
      "Resource": "${data.aws_dynamodb_table.dynamodb_amplify_table.arn}",
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
  type = "zip"

  source_dir  = "${path.module}/../../../../../lambda_${var.name}/"
  output_path = "${path.module}/../../../../../lambda_${var.name}/handler.zip"
  excludes = [
    "test/*",
    ".mocharc.js",
    "handler.zip",
  ]
}

resource "aws_lambda_function" "lambda" {
  function_name    = "${var.name}_${var.globals[terraform.workspace].resource_suffix}"
  tags             = var.globals.tags
  filename         = "${path.module}/../../../../../lambda_${var.name}/handler.zip"
  source_code_hash = filebase64sha256(data.archive_file.lambda_zip.output_path)
  role             = aws_iam_role.lambda_role.arn
  handler          = "index.handler"
  runtime          = "nodejs14.x"
  publish          = true
  timeout          = 65
  depends_on = [
    aws_iam_role_policy_attachment.lambda_policy_attach,
    data.aws_dynamodb_table.dynamodb_amplify_table
  ]

  environment {
    variables = {
      "SHARD_TO_PROCESS"          = "SHARD_1_INGESTION",
      "BLOCK_LOOKUP_TABLE_NAME"   = "${data.aws_dynamodb_table.dynamodb_amplify_table.name}",
      "BLOCK_LOOKUP_TABLE_ID_KEY" = "0",
      "PREFIX_BLOCK_HISTORY"      = "block_history",
      "PREFIX_BLOCK_NUMBER"       = "block_number"
      "INGESTION_EGRESS_BUCKET"   = "${var.stream_ingestion_egress_bucket.bucket}"
    }
  }
}

resource "aws_sqs_queue" "dlq_kinesis_event_transformer" {
  name = "${var.name}_dlq_${var.globals[terraform.workspace].resource_suffix}"

  # policy = <<POLICY
  #  {
  #    "Version": "2012-10-17",
  #    "Statement": [
  #      {
  #        "Effect": "Allow",
  #        "Principal": "*",
  #        "Action": "sqs:SendMessage",
  #        "Resource": "${aws_lambda_function.lambda.arn}",
  #        "Condition": {
  #          "ArnEquals": { "aws:SourceArn": "${aws_lambda_function.lambda.arn}" }
  #        }
  #      }
  #    ]
  #  }
  #  POLICY
}

resource "aws_lambda_event_source_mapping" "kinesis_lambda_event_mapping" {
  batch_size             = 1
  event_source_arn       = var.kinesis_data_stream.arn
  enabled                = true
  function_name          = aws_lambda_function.lambda.arn
  starting_position      = "LATEST"
  parallelization_factor = 1
  maximum_retry_attempts = 1

  destination_config {
    on_failure {
      destination_arn = aws_sqs_queue.dlq_kinesis_event_transformer.arn
    }
  }

  depends_on = [
    aws_iam_policy.lambda_policy,
    aws_iam_role_policy_attachment.lambda_policy_attach
  ]
}

data "local_file" "amplify_appsync_appId" {
  filename = "${path.module}/lookup_amplify_dynamodb_table_id.txt"
  depends_on = [
    null_resource.lookup_amplify_dynamodb_table
  ]
}

data "aws_dynamodb_table" "dynamodb_amplify_table" {
  name = "PoolSuccessfullBlockEventsProcessed-${data.local_file.amplify_appsync_appId.content}-${var.globals[terraform.workspace].resource_suffix}"

  depends_on = [
    data.local_file.amplify_appsync_appId
  ]
}

resource "null_resource" "lookup_amplify_dynamodb_table" {
  triggers = {
    build_number = "${timestamp()}"
  }

  provisioner "local-exec" {
    interpreter = ["pwsh", "-Command"]
    command     = "((aws appsync list-graphql-apis --query 'graphqlApis[?name==`adexr-${var.globals[terraform.workspace].resource_suffix}`].apiId') | ConvertFrom-Json).Trim() | Out-File -Encoding utf8NoBOM -NoNewLine -FilePath ${path.module}/lookup_amplify_dynamodb_table_id.txt"
  }
}

