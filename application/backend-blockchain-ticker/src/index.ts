import { createIngestionEvent } from '../../library/src/graphql/mutations';
import { BlockchainSimpleTickerService } from './services/blockchain-simple-ticker.service'

const library = require('../../library/src/bootstrapper/bootstrap');


require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

console.log(`ENVIRONMENT IS: ${process.env.NODE_ENV}`);

const initialize = async () => {
    const blockchainTicker = new BlockchainSimpleTickerService();
    await blockchainTicker.loadConnexDriver();
    const ticker = blockchainTicker.getTicker();

    // const test = {
    //     typeName: "CreateIngestionBucketPayload",
    //     details : JSON.stringify({ "testkey": "testkeyvalue"})
    // };

    for (; ;) {
        var head = await ticker.next();

        try {
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
        catch (err) {
            console.log(err);
            throw err;          
        }

    }
}

initialize();




// const testObject = {
//     payload: JSON.stringify({
//         blocknumber: 123456,
//         application: "adexrio"
//     })
//};
//const intervalTicker = async () => {
    // try{
    //     const foobar = await library.API.graphql(library.graphqlOperation(createIngestionEvent, { input: testObject }));
    //     console.log('completed', foobar);
    // }
    // catch(e) {
    //     console.log(e);
    // }    
//};



//setInterval(intervalTicker, 10000);

