resource "aws_s3_bucket" "firehose_ingestion_bucket" {
  bucket = "firehose.ingest.storage.bucket.${var.globals[terraform.workspace].resource_suffix}"
  acl    = "private"
  tags   = var.tags
}

resource "aws_s3_bucket_public_access_block" "firehose_ingestion_bucket_access" {
  bucket = aws_s3_bucket.firehose_ingestion_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}