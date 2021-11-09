key            = "adexrio.prod/terraform.tfstate"
bucket         = "tf-adexr-states-bucket"
dynamodb_table = "tf-adexr-states-locks"
region         = "us-east-1"
encrypt        = true
kms_key_id     = "arn:aws:kms:us-east-1:891289117461:alias/aws/s3"



