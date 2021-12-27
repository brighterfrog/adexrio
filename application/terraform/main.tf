terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.70.0"
    }
  }

  required_version = "1.1.2"
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

module "historical_events" {
  source                                      = "./modules/historical_events"
  globals                                     = var.globals
  ingestion_ingress_sqs_historical_fifo_queue = module.shared.ingestion_ingress_sqs_historical_fifo_queue
  ingestion_ingress_current_block_fifo_queue  = module.shared.ingestion_ingress_current_block_fifo_queue
}

module "current_events" {
  source                                     = "./modules/current_events"
  globals                                    = var.globals
  ingestion_ingress_current_block_fifo_queue = module.shared.ingestion_ingress_current_block_fifo_queue
}

module "shared" {
  source                                     = "./modules/shared"
  globals                                    = var.globals
  historical_step_function_state_machine_arn = module.historical_events.historical_step_function_state_machine_arn
  block_event_step_function_state_machine_arn = module.current_events.current_events_step_function_state_machine_arn
}




# resource "aws_kinesis_firehose_delivery_stream" "deleteme" {
#   name = "KDS-S3-qmMNe"
#   destination = "extended_s3"

# }