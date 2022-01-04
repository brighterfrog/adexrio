import { API, graphqlOperation, Amplify } from 'aws-amplify';
import { createIngestionEvent } from './graphql/mutations'
import { SecretsManager } from './backend/aws-services/secrets-manager';
import { BlockChainService } from './backend/blockchain/blockchain-service';
import { BlockchainWalletService } from './backend/blockchain/blockchain-wallet-service';
const util = require('util');

//ENV files only for LOCAL TESTING
//AWS LAMBDA USES ITS OWN ENV VARIABLES 
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

//const bootstrap = require('./bootstrapper/bootstrap');

//const awsmobile = require('./aws-exports');
//Amplify.configure(awsmobile.default);

// bootstrap.init();

// const testObject = {
//     payload: JSON.stringify(1234)
// };



//############# GRAPHQL
// const foo = async () => {
//     try{
//         const foobar = await API.graphql(graphqlOperation(createIngestionEvent, {input: testObject}));
//         console.log('completed', foobar);
//     }
//     catch(e) {
//         console.log(e);
//     }    
//   };

//   foo();

//############# SECRET MANAGER
//  const foo = async () => {
//      const sm = new SecretsManager();
//      let test = await sm.getSecretValue('adexrio/wallets/mnemonics');     
//      console.log('test is', test);

//      let test2 = await sm.secretsMap.get('adexrio/wallets/mnemonics');
//      console.log('test2', test2);
//  }
//  foo();

//############# BLOCKCHAIN SERVICE
const foo = async () => {
    const allEventsArray = [];

    const EVENTS = {
        GameCreatedEvent: 'GameCreatedEvent',
        PlayerJoinedGameEvent: 'PlayerJoinedGameEvent',
        PlayerLeftGameEvent: 'PlayerLeftGameEvent',
        GameAwaitingLotteryEvent: 'GameAwaitingLotteryEvent',
        GameCompletedEvent: 'GameCompletedEvent'
    }
    const EVENT_TO_FILTER = 'GameCreatedEvent';

    const sm = new SecretsManager();
    const walletSecretDetails = await sm.getSecretValue('adexrio/wallets/mnemonics');
    const blockchainService = new BlockChainService(JSON.parse(walletSecretDetails.SecretString));
    await blockchainService.initializeWallet();
    
    //* filter 
    const filter = blockchainService.getFilterForEvent(
        {
            eventName: EVENTS.GameCompletedEvent,
            startBlock: 0,
            endBlock: blockchainService.walletService.connex.thor.status.head.number
        }
    );

    console.log('filter is', filter);

    const result = await blockchainService.executeFilterForEvent(filter, 0, 255, async (events) => {
        console.log(events.length);
        events.map(event => { allEventsArray.push(event) })
    });
    //* data from filter 

    console.log('TestArray Length', allEventsArray.length);
    
     allEventsArray.forEach((item) => {
         console.log(item.decoded);
    })
    
}


foo().then(() => {
    console.log('done');
});
