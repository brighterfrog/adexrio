"use strict";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument, GetCommand } from "@aws-sdk/lib-dynamodb";


export class DynamoDbDatabaseService {

  client: DynamoDBClient;
  ddbDocClient: DynamoDBDocument;
  tableNames: {

  }

  constructor() {
    this.client = new DynamoDBClient({ region: `${process.env.REGION}` });

    const marshallOptions = {
      // Whether to automatically convert empty strings, blobs, and sets to `null`.
      convertEmptyValues: false, // false, by default.
      // Whether to remove undefined values while marshalling.
      removeUndefinedValues: false, // false, by default.
      // Whether to convert typeof object to map attribute.
      convertClassInstanceToMap: false, // false, by default.
    };

    const unmarshallOptions = {
      // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
      wrapNumbers: false, // false, by default.
    };

    const translateConfig = { marshallOptions, unmarshallOptions };

    this.ddbDocClient = DynamoDBDocument.from(this.client, translateConfig);
  }

  async addRecordToTable() {
    console.log("start addRecordToTable");
    let result;
  }

  async readLastBlockForEventsProcessed() {
    console.log("start readLastBlockForEventsProcessed");
    let result;

    var input = {
      Key: {
        id: process.env.BLOCK_LOOKUP_TABLE_ID_KEY,
      },
      TableName: `${process.env.BLOCK_LOOKUP_TABLE_NAME}`,
    };
    const command = new GetCommand(input);
    const response = await this.ddbDocClient.send(command);

    console.log("readLastBlockForEventsProcessed response", response);

    if (!response.Item) {
      console.log(`No last block found, returning 0`);
      result = 0;
    } else {
      console.log(
        `last block found ${response.Item.lambdaProcessorDecisionCheckForNextBlocknumber}`
      );
      result = response.Item.lambdaProcessorDecisionCheckForNextBlocknumber;
    }

    return result;
  }

}

