module "apigateway" {
  source  = "./apigateway"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
      {
        environment = "${var.globals[terraform.workspace].resource_suffix}"
      }
    ))
  kinesis_data_stream = module.kinesis_data_stream.ingest_stream
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