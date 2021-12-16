data "aws_dynamodb_table" "dynamodb_amplify_table" {
  name = "PoolSuccessfullBlockEventsProcessed-${data.local_file.amplify_appsync_appId.content}-${var.globals[terraform.workspace].resource_suffix}"

  depends_on = [
    data.local_file.amplify_appsync_appId
  ]
}

resource "aws_ssm_parameter" "appsync_api_id_secret" {
  name      = "/adexrio/amplify_dynamodb_pool_table_${var.globals[terraform.workspace].resource_suffix}"
  type      = "String"
  value     = data.aws_dynamodb_table.dynamodb_amplify_table.name
  overwrite = true

  depends_on = [
    data.aws_dynamodb_table.dynamodb_amplify_table
  ]

  lifecycle {
    ignore_changes = [
      value
    ]
  }
}

resource "null_resource" "lookup_amplify_dynamodb_table" {
  triggers = {
    build_number = "${timestamp()}"
  }

  provisioner "local-exec" {
    interpreter = ["pwsh", "-Command"]
    command     = "((aws appsync list-graphql-apis --query 'graphqlApis[?name==`adexr-${var.globals[terraform.workspace].resource_suffix}`].apiId') | ConvertFrom-Json).Trim() | Out-File -Encoding utf8NoBOM -NoNewLine -FilePath ${path.module}/lookup_amplify_dynamodb_table_id.txt"
  }
}

data "local_file" "amplify_appsync_appId" {
  filename = "${path.module}/lookup_amplify_dynamodb_table_id.txt"
  depends_on = [
    null_resource.lookup_amplify_dynamodb_table
  ]
}