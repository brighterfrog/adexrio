var AWS = require('aws-sdk'),
    region = "us-east-1"

// Create a Secrets Manager client
var client = new AWS.SecretsManager({
    region: region
});

// In this sample we only handle the specific exceptions for the 'GetSecretValue' API.
// See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
// We rethrow the exception by default.

async function getSecretValue(secretName) {
   return (client.getSecretValue({SecretId: secretName}).promise());
}
module.exports = getSecretValue;

