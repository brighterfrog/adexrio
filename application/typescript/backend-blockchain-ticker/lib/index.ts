import { createIngestionEvent, createErrorLog } from './library/graphql/mutations';
import { BlockchainSimpleTickerService } from './services/blockchain-simple-ticker.service'
import { API, graphqlOperation, GraphQLResult } from './library/amplify-bootstrapper/bootstrap-amplify';


require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

console.log(`ENVIRONMENT IS: ${process.env.NODE_ENV}`);

console.log(`VECHAIN_API_NODE is ${process.env.VECHAIN_API_NODE}`);

const initialize = async () => {

    try {
        console.log("Beginning initialize()");

        const blockchainTicker = new BlockchainSimpleTickerService();
        await blockchainTicker.loadConnexDriver();
        const ticker = blockchainTicker.getTicker();

        for (; ;) {
            var head = await ticker.next();

            console.log('head result from ticker is', head);
           
            const appsyncresult = await API.graphql(
                graphqlOperation(
                    createIngestionEvent,
                    {
                        input: {
                            event: JSON.stringify({
                                head: head,
                                application: 'adexrio-backend-blockchain-ticker',
                                event_name: 'block_ticker'
                            })
                        }
                    }
                )
            );
            console.log('completed appsync mutation', appsyncresult);
        }
    }
    catch (err) {        
        console.log('Exception caught: ', err);
      
        const logErrorResult = await API.graphql(
            graphqlOperation(
                createErrorLog,
                {
                   input: { 
                       stackTrace: err.stack 
                    }
                }
            )
        );

        console.log('Logging Error Result', logErrorResult);                 
    }

}

initialize();
