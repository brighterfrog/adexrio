export function handler(event: any, context: any): Promise<{
    s3: any;
    sqs: import("@aws-sdk/client-sqs").SendMessageCommandOutput;
}>;
