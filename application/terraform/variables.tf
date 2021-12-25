variable "aws_region" {
  default = "us-east-1"
}

variable "globals" {
  type = map(any)
  default = {
    "dev" = {
      "resource_suffix" = "dev"
      "account_id"      = "891289117461"
    }
    "test" = {
      "resource_suffix" = "test"
      "account_id"      = "891289117461"
    }
    "prod" = {
      "resource_suffix" = "prod"
      "account_id"      = "891289117461"
    },
    "tags" = {
      application : "adexrio",
    }
  }
}

