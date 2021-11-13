output "firehose_ingestion_bucket_arn" {
   value = "${aws_s3_bucket.firehose_ingestion_bucket.arn}"
} 
output "payload_events_historical_bucket_arn" {
   value = "${aws_s3_bucket.payload_events_historical_bucket.arn}"
} 
output "payload_events_blocknumber_bucket_arn" {
   value = "${aws_s3_bucket.payload_events_blocknumber_bucket.arn}"
} 
