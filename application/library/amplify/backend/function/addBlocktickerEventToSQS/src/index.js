
const dbService = require('./services/database-service');
const sqsDecisionService = require('./services/sqs-decision-service');
const sqsService = require('./services/sqs-service');

exports.handler = async (event, context) => {    
  
    console.log("event is: ", JSON.stringify(event));

    //collect from db last block number processed
    const lastBlock = await dbService.readLastBlockForEventsProcessed();

    //decide which queue to drop message in
    const eventType = sqsDecisionService.getEventTypeBasedOnBlocksProcessed(event.arguments.input.event.head.number, lastBlock);

    //write event to queue
    const sendMessageSqsResult = await sqsService.sendMessage(eventType, event);
    
    return {
        s3: event.prev.result,
        sqs: sendMessageSqsResult
    };

    
    // const input = {            
    //      MessageBody: JSON.stringify(event),
    //      MessageDeduplicationId: event.arguments.input.event.head.number,  // Required for FIFO queues
    //      MessageGroupId: "Group1",  // Required for FIFO queues
    //      QueueUrl: historical_fifo_url
    //    };
      

    // const client = new SQSClient();
    // const command = new SendMessageCommand(input);
    // const responseFromSqs = await client.send(command);    
};
