terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.64.2"
    }
  }

  required_version = "1.0.10"
  backend "s3" {} #comment out to initialize  
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

module "apigateway_lambda_proxies" {
  source  = "./modules/apigateway"
  globals = var.globals
}

