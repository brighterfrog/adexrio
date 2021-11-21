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

  # single_block_queue_arn = module.sqs.single_block_queue_arn
  # historical_queue_arn   = module.sqs.historical_queue_arn
}

module "sqs" {
  source  = "./sqs"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))
  firehose_ingestion_bucket_arn = module.storage.firehose_ingestion_bucket_arn
  firehose_ingestion_bucket_id  = module.storage.firehose_ingestion_bucket_id

  depends_on = [
    module.storage
  ]

}

module "kinesis_delivery_stream" {
  source                        = "./kinesis_delivery_stream"
  globals                       = var.globals
  firehose_ingestion_bucket_arn = module.storage.firehose_ingestion_bucket_arn
  ingestion_stream              = module.kinesis_data_stream.ingestion_stream
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))
}

module "lambda_event_bridge_block_poller" {
  source  = "./lambdas/event_bridge_block_poller"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))
}

module "event_bridge" {
  source  = "./event_bridge"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))
  event_bridge_block_poller_lambda = module.lambda_event_bridge_block_poller.event_bridge_block_poller_lambda
}

