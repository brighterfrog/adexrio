# Initialization #

# Working Directory #
`application\tf`

## If never configured backend state s3/dynamodb lock table ##
`terraform init`
`terraform apply`

## If already configured backend state s3/dynamodb lock table ##

### Environments:
#### Development: `terraform init -backend-config=/backend/dev/backend.tf`
#### Test: `terraform init -backend-config=/backend/test/backend.tf`
#### Production: `terraform init -backend-config=/backend/prod/backend.tf`

## Changing workspaces
`terraform workspace select <dev,test,prod>`