terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.66.0"
    }
  }

  required_version = "1.0.11"
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

module "shared" {
  source  = "./modules/shared"
  globals = var.globals
}

module "historical_events" {
  source  = "./modules/historical_events"
  globals = var.globals
}


# resource "aws_kinesis_firehose_delivery_stream" "deleteme" {
#   name = "KDS-S3-qmMNe"
#   destination = "extended_s3"

# }

resource "aws_appsync_graphql_api" "appsync_api" {
  authentication_type = "API_KEY"
  name                = "adexr-${var.globals[terraform.workspace].resource_suffix}"
}