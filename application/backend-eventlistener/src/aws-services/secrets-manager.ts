
export class SecretsManager {

    AWS: any    

    constructor(aws: any) {
        this.AWS = aws;
    }

    getSecretValue(secretName) {

        var client = new this.AWS.SecretsManager({
            region: 'us-east-1'
        });

       return (client.getSecretValue({SecretId: secretName}).promise());
    }    

}
