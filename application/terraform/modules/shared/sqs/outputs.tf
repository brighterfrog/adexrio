output "ingestion_ingress_sqs_historical_fifo_queue" {
  value = aws_sqs_queue.ingestion_ingress_sqs_historical_fifo_queue
}
output "ingestion_ingress_current_block_fifo_queue" {
  value = aws_sqs_queue.ingestion_ingress_sqs_current_block_fifo_queue
}