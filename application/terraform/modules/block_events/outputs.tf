# output "block_events_step_function_state_machine_arn" {
#   value = module.block_events_step_function.block_events_step_function_state_machine_arn
# }
output "queue" {
  value = module.sqs_template_block_event_queue.queue
}