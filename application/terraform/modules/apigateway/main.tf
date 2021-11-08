

module "historical_proxy" {
	source  = "../lambdas/historical_proxy"
  	globals = var.globals
}
# HTTP API
resource "aws_apigatewayv2_api" "api" {
  	name = "adexrio_blockchain_apigw_${var.globals[terraform.workspace].resource_suffix}"
	protocol_type = "HTTP"	
}

# Permission
resource "aws_lambda_permission" "apigw" {
	action        = "lambda:InvokeFunction"
	function_name = module.historical_proxy.lambda_historical_proxy.function_name
	principal     = "apigateway.amazonaws.com"

	source_arn = "${aws_apigatewayv2_api.api.execution_arn}/*/*"
}