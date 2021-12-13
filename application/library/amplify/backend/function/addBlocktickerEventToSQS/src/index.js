const { SQSClient, SendMessageCommand  } = require("@aws-sdk/client-sqs");

exports.handler = async (event, context) => {    
  
    console.log("event is: ", JSON.stringify(event));


    //collect from db last block number processed
    //decide which queue to drop message in
    //write event to queue


    const ingestion_ingress_current_block_fifo_queue = `${process.env.CurrentBlockQueue}${process.env.ENV}`; 
    const current_block_fifo_url = `https://sqs.${process.env.REGION}.amazonaws.com/${process.env.ACCOUNTID}/${ingestion_ingress_current_block_fifo_queue}.fifo`;

    console.log('ingestion_ingress_current_block_fifo_queue', ingestion_ingress_current_block_fifo_queue);
    console.log("ingestion_ingress_current_block_fifo_queue url:", current_block_fifo_url);
    
    const ingestion_ingress_historical_fifo_queue = `${process.env.HistoricalFifoQueue}${process.env.ENV}`;
    const historical_fifo_url = `https://sqs.${process.env.REGION}.amazonaws.com/${process.env.ACCOUNTID}/${ingestion_ingress_historical_fifo_queue}.fifo`;
    
    console.log('ingestion_ingress_historical_fifo_queue', ingestion_ingress_historical_fifo_queue);
    console.log("ingestion_ingress_historical_fifo_queue url:", historical_fifo_url);

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
