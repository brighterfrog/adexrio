# output "lambda_historical_proxy" {
#   value = aws_lambda_function.lambda_historical_proxy
# }
output "ingestion_ingress_sqs_historical_fifo_queue" {
  value = module.sqs.ingestion_ingress_sqs_historical_fifo_queue
}
output "ingestion_ingress_current_block_fifo_queue" {
  value = module.sqs.ingestion_ingress_current_block_fifo_queue
}