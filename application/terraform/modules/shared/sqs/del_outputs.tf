output "ingestion_ingress_historical_fifo_queue" {
  value = aws_sqs_queue.ingestion_ingress_historical_fifo_queue
}
output "ingestion_ingress_block_event_fifo_queue" {
  value = aws_sqs_queue.ingestion_ingress_block_event_fifo_queue
}