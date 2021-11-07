variable "aws_region" {
  default = "us-east-1"
}

variable "globals" {
  type = map(any)
  default = {
    "dev" = {
      "aws_elastic_beanstalk_environment_name" = "Backendeventlisteneradexrio-DEV"
    }
    "test" = {
      "aws_elastic_beanstalk_environment_name" = "Backendeventlisteneradexrio-TEST"
    }
    "prod" = {
      "aws_elastic_beanstalk_environment_name" = "Backendeventlisteneradexrio-PROD"
    }
  }
}