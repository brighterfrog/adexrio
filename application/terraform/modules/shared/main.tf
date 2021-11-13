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

module "storage" {
  source  = "./storage"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
      {
        environment = "${var.globals[terraform.workspace].resource_suffix}"
      }
    ))
    single_block_queue_arn = module.sqs.single_block_queue_arn
    historical_queue_arn = module.sqs.historical_queue_arn
}

module "sqs" {
   source  = "./sqs"
    globals = var.globals
    payload_events_historical_arn = module.storage.payload_events_historical_bucket_arn
    payload_events_blocknumber_arn = module.storage.payload_events_blocknumber_bucket_arn
    tags = (merge(
    var.globals.tags,
      {
        environment = "${var.globals[terraform.workspace].resource_suffix}"
      }
    ))

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