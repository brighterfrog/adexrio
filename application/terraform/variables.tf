variable "aws_region" {
  default = "us-east-1"
}

variable "globals" {
  type = map(any)
  default = {
    "dev" = {
      "resource_suffix"  = "dev"
      "account_id"       = "891289117461"
      "vechain_api_node" = "https://vethor-node.vechain.com"
      "debug_on"         = true
      "node_env"         = "dev"
      "keystore_name"    = "adexrio/keystore/owner/development"
    }
    "test" = {
      "resource_suffix"  = "test"
      "account_id"       = "891289117461"
      "vechain_api_node" = "https://vethor-node-test.vechaindev.com"
      "debug_on"         = true
      "node_env"         = "test"
      "keystore_name"    = "adexrio/keystore/owner/test"
    }
    "prod" = {
      "resource_suffix"  = "prod"
      "account_id"       = "891289117461"
      "vechain_api_node" = "https://vethor-node.vechain.com"
      "debug_on"         = true
      "node_env"         = "prod"
      "keystore_name"    = "adexrio/keystore/owner/main"
    },
    "tags" = {
      application : "adexrio",
    }
  }
}