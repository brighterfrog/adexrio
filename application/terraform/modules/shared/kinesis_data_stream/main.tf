resource "aws_kinesis_stream" "ingest_stream" {
  name             = "adexrio_ingestion_stream_${var.globals[terraform.workspace].resource_suffix}"
  shard_count      = 1
  retention_period = 24

  shard_level_metrics = [
    "IncomingBytes",
    "OutgoingBytes",
    "WriteProvisionedThroughputExceeded", 
    "ReadProvisionedThroughputExceeded"
  ]

   tags = var.tags
}