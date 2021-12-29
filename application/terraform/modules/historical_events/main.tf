# name used in addBlocktickerEventToSQS lambda
module "sqs_template_historical_queue" {
  source  = ".././shared/sqs/base_template"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))
  name                           = "${var.queue_name}_${var.globals[terraform.workspace].resource_suffix}"
  is_fifo                        = true
  is_content_based_deduplication = true
  visibility_timeout_seconds     = var.lambda_and_queue_timeout_in_seconds
  policy_string                  = <<POLICY
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Principal": "*",
         "Action": "sqs:SendMessage",
         "Resource": "arn:aws:sqs:*:*:${var.queue_name}_${var.globals[terraform.workspace].resource_suffix}",
         "Condition": {
            "ArnEquals": { "aws:SourceArn": " arn:aws:lambda:us-east-1:891289117461:function:addBlocktickerEventToSQS-${var.globals[terraform.workspace].resource_suffix}" }       
         }
       }
     ]
   }
   POLICY
}


data "aws_iam_policy_document" "lambda_template_historical_events_processor_policy_document" {
  # can support multiple statement blocks
  statement {
    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]
    resources = ["arn:aws:logs:*:*:*"]
    effect    = "Allow"
  }

  statement {
    actions = [
      "sqs:*"
    ]
    resources = [module.sqs_template_historical_queue.queue.arn]
    effect    = "Allow"
  }
}

module "lambda_template_historical_event_processor" {
  source  = ".././shared/lambdas/base_template"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))
  lambda_name                         = "lambda_historical_event_processor"
  lambda_iam_aws_policy_document_json = data.aws_iam_policy_document.lambda_template_historical_events_processor_policy_document.json
  lambda_directory_name               = "lambda_historical_event_processor"
  lambda_description                  = "Function processes everything from the FIFO historical event queue"
  lambda_timeout_in_seconds           = var.lambda_and_queue_timeout_in_seconds
  environment_variables = {
    "ENV"                    = "${var.globals[terraform.workspace].resource_suffix}"
    "REGION"                 = "us-east-1"
    "BLOCK_EVENT_QUEUE_NAME" = var.block_event_queue.name
    "ACCOUNTID"              = "${var.globals[terraform.workspace].account_id}"
  }
}

resource "aws_lambda_event_source_mapping" "queue_event_trigger" {
  event_source_arn = module.sqs_template_historical_queue.queue.arn
  function_name    = module.lambda_template_historical_event_processor.lambda.arn
}
# name used in addBlocktickerEventToSQS lambda


# module "historical_step_function" {
#   source  = "./step-functions"
#   globals = var.globals
#   tags = (merge(
#     var.globals.tags,
#     {
#       environment = "${var.globals[terraform.workspace].resource_suffix}"
#     }
#   ))
#   ingestion_ingress_sqs_historical_fifo_queue = var.ingestion_ingress_sqs_historical_fifo_queue
#   ingestion_ingress_current_block_fifo_queue  = var.ingestion_ingress_current_block_fifo_queue
# }

# # name used in addBlocktickerEventToSQS lambda
# resource "aws_sqs_queue" "ingestion_ingress_historical_fifo_queue" {
#   name                        = "ingestion_ingress_historical_fifo_queue_${var.globals[terraform.workspace].resource_suffix}.fifo"
#   fifo_queue                  = true
#   content_based_deduplication = true

#   policy = <<POLICY
#    {
#      "Version": "2012-10-17",
#      "Statement": [
#        {
#          "Effect": "Allow",
#          "Principal": "*",
#          "Action": "sqs:SendMessage",
#          "Resource": "arn:aws:sqs:*:*:ingestion_ingress_historical_fifo_queue_${var.globals[terraform.workspace].resource_suffix}",
#          "Condition": {
#            "ArnEquals": { "aws:SourceArn": " arn:aws:lambda:us-east-1:891289117461:function:addBlocktickerEventToSQS-${var.globals[terraform.workspace].resource_suffix}" }           
#          }
#        }
#      ]
#    }
#    POLICY
# }


# module "lambda_block_event_processor" {
#   source  = "./lambdas"
#   globals = var.globals
#   tags = (merge(
#     var.globals.tags,
#     {
#       environment = "${var.globals[terraform.workspace].resource_suffix}"
#     }
#   ))
#   lambda_name                         = "lambda_block_event_processor"
#   lambda_iam_aws_policy_document_json = data.aws_iam_policy_document.lambda_fn_get_highest_block_policy_document.json
#   lambda_directory_name               = "lambda_historical_step_fn_get_highest_block"
#   lambda_description                  = "Step fn lambda to get the highest current head block number from a batch of messages in queue when the lambda triggers"
#   lambda_timeout_in_seconds           = 60
#   environment_variables = {
#     "ENV"    = "${var.globals[terraform.workspace].resource_suffix}"
#     "REGION" = "us-east-1"
#   }
# }


