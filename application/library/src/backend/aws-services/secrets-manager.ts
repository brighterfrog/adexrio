'use strict';

const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");

export class SecretsManager {

    private client: any;
    secretsMap: Map<string, string>;

    constructor() {
        this.client = new SecretsManagerClient({ region: "us-east-1" });
        this.secretsMap = new Map();
    }

    async getSecretValue(secretName: string) {  
        const command = new GetSecretValueCommand({
            SecretId: secretName
        });
        const result = await this.client.send(command);
        this.secretsMap.set(secretName, result);

        return result;
    }    

  
}

