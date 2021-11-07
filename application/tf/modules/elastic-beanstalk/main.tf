resource "aws_elastic_beanstalk_application" "backend_ticker_subscriber" {
  name        = "backend-eventlistener-adexrio"
  description = "backend-eventlistener-adexrio"

  appversion_lifecycle {
           delete_source_from_s3 = false
           max_age_in_days       = 0 
           max_count             = 10
           service_role          = "arn:aws:iam::891289117461:role/aws-elasticbeanstalk-service-role"
        }
}

resource "aws_elastic_beanstalk_environment" "beanstalk_env" {
  name                = var.globals[terraform.workspace].aws_elastic_beanstalk_environment_name
  description        = "adexr.io backend blockchain ticker"
  application         = aws_elastic_beanstalk_application.backend_ticker_subscriber.name
  solution_stack_name = "64bit Amazon Linux 2 v5.4.7 running Node.js 14"
  tier                = "WebServer" 
}