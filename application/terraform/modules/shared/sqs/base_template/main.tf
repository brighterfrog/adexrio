# name used in addBlocktickerEventToSQS lambda
# name used in addBlocktickerEventToSQS lambda
resource "aws_sqs_queue" "queue" {
  name                        = "${var.name}.fifo"
  fifo_queue                  = var.is_fifo
  content_based_deduplication = var.is_content_based_deduplication
  visibility_timeout_seconds  = var.visibility_timeout_seconds
  policy                      = var.policy_string
}