variable "aws_region" {
  default = "us-east-1"
}

variable "globals" {
  type = map(any)
  default = {
    "dev" = {
      "resource_suffix" = "dev"
    }
    "test" = {
      "resource_suffix" = "test"
    }
    "prod" = {
      "resource_suffix" = "prod"
    },
    "tags" = {
      application : "adexrio",
    }    
  }
}

