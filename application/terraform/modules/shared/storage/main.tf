# used in addBlocktickerEventToS3
resource "aws_s3_bucket" "ingestion_ingress_bucket" {
  bucket = "ingestion-ingress-bucket-${var.globals[terraform.workspace].resource_suffix}"  
  tags   = var.tags
}

resource "aws_s3_bucket_acl" "ingestion_ingress_bucket_acl" {
  bucket = aws_s3_bucket.ingestion_ingress_bucket.id
  acl    = "private"
}

resource "aws_s3_bucket_public_access_block" "request_ingestion_bucket_access" {
  bucket = aws_s3_bucket.ingestion_ingress_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket" "ingestion_egress_bucket" {
  bucket = "ingestion-egress-bucket-${var.globals[terraform.workspace].resource_suffix}"
  tags   = var.tags
}
resource "aws_s3_bucket_acl" "ingestion_egress_bucket_acl" {
  bucket = aws_s3_bucket.ingestion_egress_bucket.id
  acl    = "private"
}

resource "aws_s3_bucket_public_access_block" "ingestion_egress_bucket_access" {
  bucket = aws_s3_bucket.ingestion_egress_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}