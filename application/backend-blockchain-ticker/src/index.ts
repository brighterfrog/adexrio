import { createIngestionEvent, createErrorLog } from '../../library/src/graphql/mutations';
import { BlockchainSimpleTickerService } from './services/blockchain-simple-ticker.service'

const library = require('../../library/src/bootstrapper/bootstrap');


require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

console.log(`ENVIRONMENT IS: ${process.env.NODE_ENV}`);

const initialize = async () => {

    try {
        console.log("Beginning initialize()");

        const blockchainTicker = new BlockchainSimpleTickerService();
        await blockchainTicker.loadConnexDriver();
        const ticker = blockchainTicker.getTicker();

        for (; ;) {
            var head = await ticker.next();

            console.log('head result from ticker is', head);
           
            const appsyncresult = await library.API.graphql(
                library.graphqlOperation(
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
      
        const logErrorResult = await library.API.graphql(
            library.graphqlOperation(
                createErrorLog,
                {
                   input: { 
                       stackTrace: err.stack 
                    }
                }
            )
        );

        console.log('Logging Error Result', logErrorResult);

        throw err;                
    }

}

initialize();
