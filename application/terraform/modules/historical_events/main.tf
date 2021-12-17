module "historical_step_function" {
  source  = "./step-functions"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))
  ingestion_ingress_sqs_historical_fifo_queue = var.ingestion_ingress_sqs_historical_fifo_queue
}