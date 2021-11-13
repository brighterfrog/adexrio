output "single_block_queue_arn" {
    value = aws_sqs_queue.single_block_queue.arn
}
output "historical_queue_arn" {
    value = aws_sqs_queue.historical_queue.arn
}