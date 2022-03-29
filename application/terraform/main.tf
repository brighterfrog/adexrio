terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.8.0"
    }
  }

  required_version = "1.1.7"
  backend "s3" {} #comment out to initialize, uncomment dynamodb table block  
}

provider "aws" {
  profile = "default"
  region  = "us-east-1"
}

# resource "aws_dynamodb_table" "dynamodb-terraform-lock" {
#   name           = "tf-adexr-states-locks"
#   hash_key       = "LockID"
#   read_capacity  = 20
#   write_capacity = 20

#   attribute {
#     name = "LockID"
#     type = "S"
#   }

#   tags = {
#     Name = "Terraform Lock Table"
#   }
# }


# queue_name used in addBlocktickerEventToSQS lambda
module "block_events" {
  source                    = "./modules/block_events"
  globals                   = var.globals
  queue_name                = "block_events"
  lambda_timeout_in_seconds = 3
  queue_timeout_in_seconds  = 3
}

# queue_name used in addBlocktickerEventToSQS lambda
module "historical_events" {
  source                    = "./modules/historical_events"
  globals                   = var.globals
  queue_name                = "historical_events"
  block_event_queue         = module.block_events.queue
  lambda_timeout_in_seconds = 900
  queue_timeout_in_seconds  = 900
}

module "shared" {
  source  = "./modules/shared"
  globals = var.globals
  # historical_step_function_state_machine_arn = module.historical_events.historical_step_function_state_machine_arn
  # block_event_step_function_state_machine_arn = module.block_events.block_events_step_function_state_machine_arn
}




# resource "aws_kinesis_firehose_delivery_stream" "deleteme" {
#   name = "KDS-S3-qmMNe"
#   destination = "extended_s3"

# }