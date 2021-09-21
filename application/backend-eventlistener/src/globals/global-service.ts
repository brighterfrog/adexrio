import Amplify from 'aws-amplify';

export class GlobalService {

    constructor() {

    }

    registerAmplify(): void {

        //COPIED VALUES FROM AMPLIFY aws-exports.js
        //FIGURE OUT BETTER WAY TO IMPORT
        //ALSO IN TESTS
        Amplify.configure({
            "aws_project_region": "us-east-1",
            "aws_appsync_graphqlEndpoint": "https://ynl5hopzg5gptp7vxhadqcdp5a.appsync-api.us-east-1.amazonaws.com/graphql",
            "aws_appsync_region": "us-east-1",
            "aws_appsync_authenticationType": "API_KEY",
            "aws_appsync_apiKey": "da2-3xhpa6iorzbxtowzchvckyfr2q"
        });
    }

}