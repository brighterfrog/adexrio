resource "aws_kinesis_firehose_delivery_stream" "extended_s3_stream" {
  name        = "ingestion_delivery_${var.globals[terraform.workspace].resource_suffix}"
  destination = "extended_s3"

  kinesis_source_configuration {
    kinesis_stream_arn = var.ingestion_stream.arn
    role_arn           = aws_iam_role.firehose_role.arn
  }

  extended_s3_configuration {
    role_arn            = aws_iam_role.firehose_role.arn
    bucket_arn          = var.firehose_ingestion_bucket_arn
    buffer_interval     = 60
    buffer_size         = 128
    compression_format  = "UNCOMPRESSED"
    prefix              = "apigateway/ingest/!{partitionKeyFromQuery:payload_event_name}/ !{partitionKeyFromQuery:year}/!{partitionKeyFromQuery:month}/!{partitionKeyFromQuery:day}"
    error_output_prefix = "apigateway/ingest/errors"
    s3_backup_mode      = "Disabled"

    cloudwatch_logging_options {
      enabled         = true
      log_group_name  = "/aws/kinesisfirehose/ingestion_delivery_${var.globals[terraform.workspace].resource_suffix}"
      log_stream_name = "DestinationDelivery"
    }

    processing_configuration {
      enabled = "true"
      processors {
        type = "MetadataExtraction"

        parameters {
          parameter_name  = "MetadataExtractionQuery"
          parameter_value = "{payload_event_name:.payload_event_name,year:.payload_event_timestamp| strftime(\"%Y\"),month:.payload_event_timestamp| strftime(\"%m\"),day:.payload_event_timestamp| strftime(\"%d\")}"
        }

        parameters {
          parameter_name  = "JsonParsingEngine"
          parameter_value = "JQ-1.6"
        }
      }

    }

    dynamic_partitioning_configuration {
      enabled = true
      retry_options {
        duration_in_seconds = 300
      }
    }

    tags = var.tags
  }
}

resource "aws_iam_role" "firehose_role" {
  name = "ingestion_delivery_firehose_${var.globals[terraform.workspace].resource_suffix}"
  tags = var.tags

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "firehose.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_policy" "firehose_policy" {
  name        = "firehose_policy_${var.globals[terraform.workspace].resource_suffix}"
  tags        = var.tags
  description = "adexrio firehose policy"
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
      "Resource": "${var.ingestion_stream.arn}",
      "Effect": "Allow"
    }        
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "firehose_policy_attach" {
  role       = aws_iam_role.firehose_role.name
  policy_arn = aws_iam_policy.firehose_policy.arn
}
