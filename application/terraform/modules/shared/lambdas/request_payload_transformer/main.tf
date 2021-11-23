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
      "Resource": "${aws_sqs_queue.dlq_request_payload_transformer.arn}",
      "Effect": "Allow"
    },
    {
      "Action": [
        "s3:*"       
      ],
      "Resource": "${var.stream_ingestion_bucket.arn}/*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "dynamodb:*"       
      ],
      "Resource": "${var.stream_ingestion_bucket.arn}/*",
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
  source_file = "${path.module}/../../../../../lambda_request_payload_transformer/index.js"
  output_path = "${path.module}/../../../../../lambda_request_payload_transformer/handler.zip"
}

resource "aws_lambda_function" "lambda" {
  function_name    = "request_payload_transformer_${var.globals[terraform.workspace].resource_suffix}"
  tags             = var.globals.tags
  filename         = "${path.module}/../../../../../lambda_request_payload_transformer/handler.zip"
  source_code_hash = filebase64sha256(data.archive_file.lambda_zip.output_path)
  role             = aws_iam_role.lambda_role.arn
  handler          = "index.handler"
  runtime          = "nodejs14.x"
  publish          = true
  timeout          = 65
  depends_on       = [
    aws_iam_role_policy_attachment.lambda_policy_attach,
    data.local_file.amplify_appsync_appId
  ]

  environment {
    variables = {
      SHARD_TO_PROCESS            = "SHARD_1_INGESTION",
      "BLOCK_LOOKUP_TABLE_NAME"   = "PoolSuccessfullBlockEventsProcessed",
      "BLOCK_LOOKUP_TABLE_ID_KEY" = "0",
      "PREFIX_BLOCK_HISTORY" = "block_history",
      "PREFIX_BLOCK_NUMBER" = "block_number",
      "AMPLIFY_APP_ID" = "${data.local_file.amplify_appsync_appId.content}",
    }
  }
}

resource "aws_sqs_queue" "dlq_request_payload_transformer" {
  name = "request_payload_transformer_dlq_${var.globals[terraform.workspace].resource_suffix}"

  #   policy = <<POLICY
  # {
  #   "Version": "2012-10-17",
  #   "Statement": [
  #     {
  #       "Effect": "Allow",
  #       "Principal": "*",
  #       "Action": "sqs:SendMessage",
  #       "Resource": "${aws_lambda_function.lambda.arn}",
  #       "Condition": {
  #         "ArnEquals": { "aws:SourceArn": "${aws_lambda_function.lambda.arn}" }
  #       }
  #     }
  #   ]
  # }
  # POLICY
}

resource "aws_lambda_event_source_mapping" "kinesis_lambda_event_mapping" {
  batch_size             = 1
  event_source_arn       = var.kinesis_data_stream.arn
  enabled                = true
  function_name          = aws_lambda_function.lambda.arn
  starting_position      = "LATEST"
  maximum_retry_attempts = 1000

  destination_config {
    on_failure {
      destination_arn = aws_sqs_queue.dlq_request_payload_transformer.arn
    }
  }

  depends_on = [
    aws_iam_policy.lambda_policy,
    aws_iam_role_policy_attachment.lambda_policy_attach
  ]
}

data "local_file" "amplify_appsync_appId" {
    filename = "${path.module}/lookup_amplify_dynamodb_table_id"
    depends_on = [
      null_resource.lookup_amplify_dynamodb_table
    ]
}

  # locals {
  #   is_windows                   = dirname("/") == "\\"
  # }

 resource "null_resource" "lookup_amplify_dynamodb_table" {
      triggers = {
        build_number = "${timestamp()}"
    }

   provisioner "local-exec" {
     interpreter = ["powershell"]     
     command = "(aws appsync list-graphql-apis --query 'graphqlApis[?name==`adexr-${var.globals[terraform.workspace].resource_suffix}`].apiId') | ConvertFrom-Json | out-file -encoding utf8 ${path.module}/lookup_amplify_dynamodb_table_id"     
   }
}

