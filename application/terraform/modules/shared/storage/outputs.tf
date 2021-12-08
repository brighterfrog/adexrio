# output "stream_ingestion_bucket" {
#   value = aws_s3_bucket.stream_ingestion_bucket
# }
# output "stream_ingestion_bucket_arn" {
#   value = aws_s3_bucket.stream_ingestion_bucket.arn
# }
# output "stream_ingestion_bucket_id" {
#   value = aws_s3_bucket.stream_ingestion_bucket.id
# }

output "ingestion_ingress_bucket" {
  value = aws_s3_bucket.ingestion_ingress_bucket
}
output "ingestion_egress_bucket" {
  value = aws_s3_bucket.ingestion_egress_bucket
}