
const dbService = require('./services/database-service');
const sqsDecisionService = require('./services/sqs-decision-service');
const sqsService = require('./services/sqs-service');

exports.handler = async (event, context) => {    
  
    console.log("event is: ", JSON.stringify(event));

    //collect from db last block number processed
    const lastBlock = await dbService.readLastBlockForEventsProcessed();
    event.lambdaProcessorDecisionCheckForNextBlocknumber = lastBlock;  

    //decide which queue to drop message in
    const eventType = sqsDecisionService.getEventTypeBasedOnBlocksProcessed(event.arguments.input.event.head.number, lastBlock);

    //write event to queue      
    const sendMessageSqsResult = await sqsService.sendMessage(eventType, event);

    const result = {
        s3: event.prev.result,
        sqs: sendMessageSqsResult
    };
    
    console.log('result returned is', result);

    return result;    
};
