module "current_events_step_function" {
  source  = "./step-functions"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))
  ingestion_ingress_current_block_fifo_queue = var.ingestion_ingress_current_block_fifo_queue
}