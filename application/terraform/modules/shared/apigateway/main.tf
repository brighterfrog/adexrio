resource "aws_apigatewayv2_api" "api" {
  name          = "adexrio_blockchain_apigw_${var.globals[terraform.workspace].resource_suffix}"
  protocol_type = "HTTP"
  route_selection_expression = "$request.method $request.path"

  tags = var.tags
}

resource "aws_apigatewayv2_route" "route_events_historical" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "POST /blockchain/events/historical"
  target = "integrations/${aws_apigatewayv2_integration.kinesis_integration.id}"
}

resource "aws_apigatewayv2_route" "route_blocknumber" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "POST /blockchain/events/blocknumber"
  target = "integrations/${aws_apigatewayv2_integration.kinesis_integration.id}"
}

resource "aws_apigatewayv2_stage" "stage" {
  api_id = aws_apigatewayv2_api.api.id
  name   = "adexrio-stage-${var.globals[terraform.workspace].resource_suffix}"
  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "kinesis_integration" {
  api_id              = aws_apigatewayv2_api.api.id
  credentials_arn     = aws_iam_role.api_gw_role.arn 
  integration_type    = "AWS_PROXY"

  integration_subtype  = "Kinesis-PutRecord"
  request_parameters                        = {
           "Data"         = "$request.body.Data"
           "PartitionKey" = "$request.body.PartitionKey"
           "Region"       = "us-east-1"
           "StreamName"   = "adexrio_ingestion_stream_dev"
        } 
  request_templates                         = {}
  timeout_milliseconds                      = 30000    
}

# Permission
resource "aws_iam_role" "api_gw_role" {
  name               = "api_gw_invocation_role_${var.globals[terraform.workspace].resource_suffix}"
  tags               = var.tags
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "apigateway.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}
resource "aws_iam_policy" "apigw_policy" {
  name        = "api_gw_invocation_policy_${var.globals[terraform.workspace].resource_suffix}"
  tags        = var.tags
  description = "adexrio api gateway invocation policy"
  policy      = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:*",
      "Effect": "Allow"
    },
    {
      "Action": [
        "kinesis:*"        
      ],
      "Resource": "${var.kinesis_data_stream.arn}",
      "Effect": "Allow"
    }        
  ]
}
EOF
}
resource "aws_iam_role_policy_attachment" "apigw_policy_attach" {
  role       = aws_iam_role.api_gw_role.name
  policy_arn = aws_iam_policy.apigw_policy.arn
}