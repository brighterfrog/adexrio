resource "aws_sqs_queue" "historical_queue" {
  name = "historical_event_queue_${var.globals[terraform.workspace].resource_suffix}"

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "sqs:SendMessage",
      "Resource": "arn:aws:sqs:*:*:historical_event_queue_${var.globals[terraform.workspace].resource_suffix}",
      "Condition": {
        "ArnEquals": { "aws:SourceArn": "${var.firehose_ingestion_bucket_arn}" }
      }
    }
  ]
}
POLICY
}

resource "aws_sqs_queue" "single_block_queue" {
  name = "single_block_event_queue_${var.globals[terraform.workspace].resource_suffix}"

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "sqs:SendMessage",
       "Resource": "arn:aws:sqs:*:*:single_block_event_queue_${var.globals[terraform.workspace].resource_suffix}",
      "Condition": {
        "ArnEquals": { "aws:SourceArn": "${var.firehose_ingestion_bucket_arn}" }
      }
    }
  ]
}
POLICY
}

resource "aws_s3_bucket_notification" "queue_notifications" {
  bucket = var.firehose_ingestion_bucket_id

  queue {
    id            = aws_sqs_queue.historical_queue.id
    queue_arn     = aws_sqs_queue.historical_queue.arn
    events        = ["s3:ObjectCreated:*"]
    filter_prefix = "apigateway/ingest/block_history"
  }

  queue {
    id            = aws_sqs_queue.single_block_queue.id
    queue_arn     = aws_sqs_queue.single_block_queue.arn
    events        = ["s3:ObjectCreated:*"]
    filter_prefix = "apigateway/ingest/block_number"
  }
}
