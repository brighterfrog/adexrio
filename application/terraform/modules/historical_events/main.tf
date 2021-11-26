module "historical_step_function" {
  source  = "./step-functions"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))
}