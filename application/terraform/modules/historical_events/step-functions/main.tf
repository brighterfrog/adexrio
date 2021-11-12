
resource "aws_iam_role" "step_function_role" {
  name               = "historical_step_function_role_${var.globals[terraform.workspace].resource_suffix}"
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
  name = "historical_step_function_policy_${var.globals[terraform.workspace].resource_suffix}"
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
      }
    ]
  }
  EOF
}

resource "aws_sfn_state_machine" "historical_step_function" {
  name     = "historical_step_function_state_machine_${var.globals[terraform.workspace].resource_suffix}"
  role_arn = aws_iam_role.step_function_role.arn

  definition = <<EOF
{
  "Comment": "A Hello World example of the Amazon States Language using Pass states",
  "StartAt": "Hello",
  "States": {
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