module "storage" {
  source  = "./storage"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))

  # single_block_queue_arn = module.sqs.single_block_queue_arn
  # historical_queue_arn   = module.sqs.historical_queue_arn
}

#  module "lambda_apigw_proxy_to_s3" {
#    name = "kinesis_event_transformer"
#    source  = "./lambdas/kinesis_event_transformer"
#    globals = var.globals
#    tags = (merge(
#      var.globals.tags,
#      {
#        environment = "${var.globals[terraform.workspace].resource_suffix}"
#      }
#    ))
#    ingestion_ingress_bucket
#  }

# module "apigateway" {
#   source  = "./apigateway"
#   globals = var.globals
#   tags = (merge(
#     var.globals.tags,
#     {
#       environment = "${var.globals[terraform.workspace].resource_suffix}"
#     }
#   ))

#   # kinesis_data_stream = module.kinesis_data_stream.ingestion_stream
# }

# module "kinesis_data_stream" {
#   source  = "./kinesis_data_stream"
#   globals = var.globals
#   tags = (merge(
#     var.globals.tags,
#     {
#       environment = "${var.globals[terraform.workspace].resource_suffix}"
#     }
#   ))
# }


module "sqs" {
  source  = "./sqs"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))
  # kinesis_ingestion_stream = module.kinesis_data_stream.ingestion_stream
  # stream_ingestion_bucket_arn = module.storage.stream_ingestion_bucket_arn
  # stream_ingestion_bucket_id  = module.storage.stream_ingestion_bucket_id

  depends_on = [
    module.storage
  ]

}

# module "lambda_kinesis_event_transformer" {
#   name = "kinesis_event_transformer"
#   source  = "./lambdas/kinesis_event_transformer"
#   globals = var.globals
#   tags = (merge(
#     var.globals.tags,
#     {
#       environment = "${var.globals[terraform.workspace].resource_suffix}"
#     }
#   ))
#   kinesis_data_stream            = module.kinesis_data_stream.ingestion_stream
#   stream_ingestion_egress_bucket = module.storage.stream_ingestion_egress_bucket
# }





# module "historical_event_processor" {
#   source  = "./lambdas/historical_event_processor"
#   globals = var.globals
#   tags = (merge(
#     var.globals.tags,
#     {
#       environment = "${var.globals[terraform.workspace].resource_suffix}"
#     }
#   ))
#   //historical_queue_arn = module.sqs.historical_queue_arn 
# }


# module "historical_events_workflow" {
#   source  = "./historical_events"
#   globals = var.globals
#   tags = (merge(
#     var.globals.tags,
#     {
#       environment = "${var.globals[terraform.workspace].resource_suffix}"
#     }
#   ))
#   
# }



