resource "aws_sqs_queue" "historical_queue" {
  name                      = "historical_event_queue_${var.globals[terraform.workspace].resource_suffix}"

policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "sqs:SendMessage",
      "Resource": "arn:aws:sqs:*:*:s3-event-notification-queue",
      "Condition": {
        "ArnEquals": { "aws:SourceArn": "${var.payload_events_historical_arn}" }
      }
    }
  ]
}
POLICY
}

resource "aws_sqs_queue" "single_block_queue" {
  name                      = "single_block_event_queue_${var.globals[terraform.workspace].resource_suffix}"

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "sqs:SendMessage",
      "Resource": "arn:aws:sqs:*:*:s3-event-notification-queue",
      "Condition": {
        "ArnEquals": { "aws:SourceArn": "${var.payload_events_blocknumber_arn}" }
      }
    }
  ]
}
POLICY
}