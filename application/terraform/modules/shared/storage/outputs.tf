output "firehose_ingestion_bucket_arn" {
  value = aws_s3_bucket.firehose_ingestion_bucket.arn
}
output "firehose_ingestion_bucket_id" {
  value = aws_s3_bucket.firehose_ingestion_bucket.id
}
