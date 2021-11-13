resource "aws_s3_bucket" "firehose_ingestion_bucket" {
  bucket = "firehose.ingest.storage.bucket.${var.globals[terraform.workspace].resource_suffix}"
  acl    = "private"
  tags   = var.tags
}
