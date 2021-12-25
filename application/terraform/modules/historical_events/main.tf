module "historical_step_function" {
  source  = "./step-functions"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
<<<<<<< HEAD
  ))
  ingestion_ingress_sqs_historical_fifo_queue = var.ingestion_ingress_sqs_historical_fifo_queue
  ingestion_ingress_current_block_fifo_queue  = var.ingestion_ingress_current_block_fifo_queue
=======
  ))  
  ingestion_ingress_sqs_historical_fifo_queue = var.ingestion_ingress_sqs_historical_fifo_queue
  ingestion_ingress_current_block_fifo_queue = var.ingestion_ingress_current_block_fifo_queue
>>>>>>> 17454d56a3fcda9912896b60f17dba705f841582
}