module "apigateway" {
  source  = "./apigateway"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))
  kinesis_data_stream = module.kinesis_data_stream.ingestion_stream
}

module "kinesis_data_stream" {
  source  = "./kinesis_data_stream"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))
}

# module "storage" {
#   source  = "./storage"
#   globals = var.globals
#   tags = (merge(
#     var.globals.tags,
#     {
#       environment = "${var.globals[terraform.workspace].resource_suffix}"
#     }
#   ))

#   depends_on = [
#     module.sqs
#   ]
# }

module "sqs" {
  source                         = "./sqs"
  globals                        = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))
  # firehose_ingestion_bucket_arn = module.storage.firehose_ingestion_bucket_arn
  # firehose_ingestion_bucket_id = module.storage.firehose_ingestion_bucket_id
 
}

# module "kinesis_delivery_stream" {
#   source  = "./kinesis_delivery_stream"
#   globals = var.globals
#   firehose_ingestion_bucket_arn = module.storage.firehose_ingestion_bucket_arn
#   ingestion_stream = module.kinesis_data_stream.ingestion_stream
#   tags = (merge(
#     var.globals.tags,
#       {
#         environment = "${var.globals[terraform.workspace].resource_suffix}"
#       }
#     ))  
# }