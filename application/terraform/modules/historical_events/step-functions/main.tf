
resource "aws_iam_role" "step_function_role" {
  name               = "historical_step_fn_${var.globals[terraform.workspace].resource_suffix}"
  assume_role_policy = <<-EOF
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Action": "sts:AssumeRole",
        "Principal": {
          "Service": "states.amazonaws.com"
        },
        "Effect": "Allow",
        "Sid": "StepFunctionHistoricalAssumeRole"
      }
    ]
  }
  EOF
}

resource "aws_iam_role_policy" "step_function_policy" {
  name = "historical_step_function_state_machine_${var.globals[terraform.workspace].resource_suffix}"
  role = aws_iam_role.step_function_role.id

  policy = <<-EOF
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Action": [
          "lambda:InvokeFunction"
        ],
        "Effect": "Allow",
        "Resource": "*"
      },
      {
        "Action": [
          "logs:*"
        ],
        "Effect": "Allow",
        "Resource": "*"
      }
    ]
  }
  EOF
}

resource "aws_cloudwatch_log_group" "log_group_for_historical_step_function_state_machine" {
  name = "/step_functions/historical_step_function_state_machine_${var.globals[terraform.workspace].resource_suffix}"

  tags = var.tags
}

resource "aws_sfn_state_machine" "historical_step_function_state_machine" {
  name     = "historical_step_function_state_machine_${var.globals[terraform.workspace].resource_suffix}"
  role_arn = aws_iam_role.step_function_role.arn

  logging_configuration {
    log_destination        = "${aws_cloudwatch_log_group.log_group_for_historical_step_function_state_machine.arn}:*"
    include_execution_data = true
    level                  = "ALL"
  }

  definition = <<EOF
{
  "Comment": "A Hello World example of the Amazon States Language using Pass states",
  "StartAt": "CallGetLowestBlockLambda",
  "States": {
    "CallGetLowestBlockLambda": {
      "Type": "Task",
      "Resource": "${module.lambda_fn_get_highest_block.lambda.arn}",
      "Next": "CallWriteToCurrentBlockSQS",
      "Retry": [ {   
            "ErrorEquals": ["States.ALL"],      
            "IntervalSeconds": 1
         } ]
    },
    "CallWriteToCurrentBlockSQS": {
      "Type": "Task",
      "Resource": "${module.lambda_fn_lambda_write_to_current_block_queue.lambda.arn}",
      "Next": "Hello",
      "Retry": [ {   
            "ErrorEquals": ["States.TaskFailed"],      
            "IntervalSeconds": 1
         } ]
    },
    "Hello": {
      "Type": "Pass",
      "Next": "World"
    },
    "World": {
      "Type": "Pass",
      "Result": "World",
      "End": true
    }    
  }
}
EOF

}


# Lambda functions inside step function
#
#

data "aws_iam_policy_document" "lambda_fn_get_highest_block_policy_document" {
  # can support multiple statement blocks
  statement {
    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]
    resources = ["arn:aws:logs:*:*:*"]
    effect    = "Allow"
  }

}

module "lambda_fn_get_highest_block" {
  source  = "./lambdas"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))
  lambda_name                         = "historical_step_fn_get_highest_block"
  lambda_iam_aws_policy_document_json = data.aws_iam_policy_document.lambda_fn_get_highest_block_policy_document.json
  lambda_directory_name               = "lambda_historical_step_fn_get_highest_block"
  lambda_description                  = "Step fn lambda to get the highest current head block number from a batch of messages in queue when the lambda triggers"
  lambda_timeout_in_minutes           = 3
  environment_variables = {
    "ENV"    = "${var.globals[terraform.workspace].resource_suffix}"
    "REGION" = "us-east-1"
  }
}




data "aws_iam_policy_document" "lambda_fn_lambda_write_to_current_block_queue_policy_document" {
  statement {
    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]
    resources = ["arn:aws:logs:*:*:*"]
    effect    = "Allow"
  }

  statement {
    actions = [
      "sqs:*"
    ]
    resources = [var.ingestion_ingress_current_block_fifo_queue.arn]
    effect    = "Allow"
  }

}

module "lambda_fn_lambda_write_to_current_block_queue" {
  source  = "./lambdas"
  globals = var.globals
  tags = (merge(
    var.globals.tags,
    {
      environment = "${var.globals[terraform.workspace].resource_suffix}"
    }
  ))
  lambda_name                         = "historical_step_fn_write_to_current_block_queue"
  lambda_iam_aws_policy_document_json = data.aws_iam_policy_document.lambda_fn_lambda_write_to_current_block_queue_policy_document.json
  lambda_directory_name               = "lambda_historical_step_fn_write_to_current_block_queue"
  lambda_description                  = "Step fn lambda to write event to current block fifo sqs queue to process sequentially"
  lambda_timeout_in_minutes           = 15
  environment_variables = {
    "ENV"               = "${var.globals[terraform.workspace].resource_suffix}"
    "REGION"            = "us-east-1"
    "CurrentBlockQueue" = var.ingestion_ingress_current_block_fifo_queue.name
    "ACCOUNTID"         = "${var.globals[terraform.workspace].account_id}"
  }

}





# 
# resource "aws_iam_role" "lambda_get_highest_block_role" {
#   name               = "historical_step_fn_get_highest_block_${var.globals[terraform.workspace].resource_suffix}"
#   tags               = var.globals.tags
#   assume_role_policy = <<EOF
# {
#   "Version": "2012-10-17",
#   "Statement": [
#     {
#       "Action": "sts:AssumeRole",
#       "Principal": {
#         "Service": "lambda.amazonaws.com"
#       },
#       "Effect": "Allow",
#       "Sid": ""
#     }
#   ]
# }
# EOF
# }
# resource "aws_iam_policy" "lambda_get_highest_block_policy" {
#   name        = "historical_step_fn_get_highest_block_${var.globals[terraform.workspace].resource_suffix}"
#   tags        = var.globals.tags
#   path        = "/"
#   description = "Step fn lambda to get the highest block number from a batch of messages in queue when the lambda triggers"
#   policy      = <<EOF
# {
#   "Version": "2012-10-17",
#   "Statement": [
#     {
#       "Action": [
#         "logs:CreateLogGroup",
#         "logs:CreateLogStream",
#         "logs:PutLogEvents"
#       ],
#       "Resource": "arn:aws:logs:*:*:*",
#       "Effect": "Allow"
#     }         
#   ]
# }
# EOF
# }
# resource "aws_iam_role_policy_attachment" "lambda_get_highest_block_attachment" {
#   role       = aws_iam_role.lambda_get_highest_block_role.name
#   policy_arn = aws_iam_policy.lambda_get_highest_block_policy.arn
# }

# data "archive_file" "lambda_get_highest_block_zip" {
#   type        = "zip"
#   source_dir  = "${path.module}/../../../../lambda_historical_step_fn_get_highest_block/"
#   output_path = "${path.module}/../../../../lambda_historical_step_fn_get_highest_block/handler.zip"
#   excludes = [
#     "test/*",
#     "handler.zip",
#   ]
# }
# resource "aws_lambda_function" "lambda_get_highest_block" {
#   function_name    = "historical_step_fn_get_highest_block_${var.globals[terraform.workspace].resource_suffix}"
#   tags             = var.globals.tags
#   filename         = "${path.module}/../../../../lambda_historical_step_fn_get_highest_block/handler.zip"
#   source_code_hash = filebase64sha256(data.archive_file.lambda_get_highest_block_zip.output_path)
#   role             = aws_iam_role.lambda_get_highest_block_role.arn
#   handler          = "index.handler"
#   runtime          = "nodejs14.x"
#   publish          = true

#   environment {
#     variables = {     
#       REGION = "us-east-1"
#       ENV = "${var.globals[terraform.workspace].resource_suffix}"
#     }
#   }

#   depends_on       = [aws_iam_role_policy_attachment.lambda_get_highest_block_attachment]
# }


# BELOW IS NEW MODULE TO CREATE IF FIRST IS GOOD
# ingestion_ingress_current_block_fifo_queue = var.ingestion_ingress_current_block_fifo_queue

# resource "aws_iam_role" "lambda_write_to_current_block_queue_role" {
#   name               = "historical_step_fn_write_to_current_block_queue_${var.globals[terraform.workspace].resource_suffix}"
#   tags               = var.globals.tags
#   assume_role_policy = <<EOF
# {
#   "Version": "2012-10-17",
#   "Statement": [
#     {
#       "Action": "sts:AssumeRole",
#       "Principal": {
#         "Service": "lambda.amazonaws.com"
#       },
#       "Effect": "Allow",
#       "Sid": ""
#     }
#   ]
# }
# EOF
# }
# resource "aws_iam_policy" "lambda_write_to_current_block_queue_policy" {
#   name        = "historical_step_fn_write_to_current_block_queue_${var.globals[terraform.workspace].resource_suffix}"
#   tags        = var.globals.tags
#   path        = "/"
#   description = "Step fn lambda to iterate over block number delta between the last processed block and the current head number"
#   policy      = <<EOF
# {
#   "Version": "2012-10-17",
#   "Statement": [
#     {
#       "Action": [
#         "logs:CreateLogGroup",
#         "logs:CreateLogStream",
#         "logs:PutLogEvents"
#       ],
#       "Resource": "arn:aws:logs:*:*:*",
#       "Effect": "Allow"
#     }         
#   ]
# }
# EOF
# }
# resource "aws_iam_role_policy_attachment" "lambda_write_to_current_block_queue_attachment" {
#   role       = aws_iam_role.lambda_write_to_current_block_queue_role.name
#   policy_arn = aws_iam_policy.lambda_write_to_current_block_queue_policy.arn
# }

# data "archive_file" "lambda_write_to_current_block_queue_zip" {
#   type        = "zip"
#   source_dir  = "${path.module}/../../../../lambda_historical_step_fn_write_to_current_block_queue/"
#   output_path = "${path.module}/../../../../lambda_historical_step_fn_write_to_current_block_queue/handler.zip"
#   excludes = [
#     "test/*",
#     "handler.zip",
#   ]
# }
# resource "aws_lambda_function" "lambda_write_to_current_block_queue" {
#   function_name    = "historical_step_fn_write_to_current_block_queue_${var.globals[terraform.workspace].resource_suffix}"
#   tags             = var.globals.tags
#   filename         = "${path.module}/../../../../lambda_historical_step_fn_get_highest_block/handler.zip"
#   source_code_hash = filebase64sha256(data.archive_file.lambda_write_to_current_block_queue_zip.output_path)
#   role             = aws_iam_role.lambda_write_to_current_block_queue_role.arn
#   handler          = "index.handler"
#   runtime          = "nodejs14.x"
#   publish          = true

#   environment {
#     variables = {     
#       REGION = "us-east-1"
#       ENV = "${var.globals[terraform.workspace].resource_suffix}"
#     }
#   }

#   depends_on       = [aws_iam_role_policy_attachment.lambda_write_to_current_block_queue_attachment]
# }
