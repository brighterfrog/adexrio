resource "aws_s3_bucket" "firehose_ingestion_bucket" {
  bucket = "firehose.ingest.storage.bucket.${var.globals[terraform.workspace].resource_suffix}"
  acl    = "private"
  tags = var.tags
}

resource "aws_s3_bucket" "payload_events_historical_bucket" {
  bucket = "payloads.historical.bucket.${var.globals[terraform.workspace].resource_suffix}"
  acl    = "private"
  tags = var.tags
}
resource "aws_s3_bucket_notification" "historical_queue_notification" {
  bucket = aws_s3_bucket.payload_events_historical_bucket.id

  queue {
    queue_arn     = var.historical_queue_arn
    events        = ["s3:ObjectCreated:*"]
    filter_suffix = ".log"
  }
}

resource "aws_s3_bucket" "payload_events_blocknumber_bucket" {
  bucket = "payloads.blocknumber.bucket.${var.globals[terraform.workspace].resource_suffix}"
  acl    = "private"
  tags = var.tags
}
resource "aws_s3_bucket_notification" "blocknumber_queue_notification" {
  bucket = aws_s3_bucket.payload_events_blocknumber_bucket.id

  queue {
    queue_arn     = var.single_block_queue_arn
    events        = ["s3:ObjectCreated:*"]
    filter_suffix = ".log"
  }
}
