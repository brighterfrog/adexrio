// import { API, graphqlOperation, Amplify } from 'aws-amplify';
import { API, graphqlOperation, Amplify } from './amplify-bootstrapper/bootstrap-amplify';
import { createIngestionEvent } from './graphql/mutations';
import { getPoolSuccessfullBlockEventsProcessed } from './graphql/queries';
import { SecretsManager } from './backend/aws-services/secrets-manager';
import { BlockChainService } from './backend/blockchain/blockchain-service';
import { BlockchainWalletService } from './backend/blockchain/blockchain-wallet-service';

const util = require('util');

//ENV files only for LOCAL TESTING
//AWS LAMBDA USES ITS OWN ENV VARIABLES 
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });


//############# GRAPHQL
const testObject = {
    payload: JSON.stringify(1234)
};

 const foo = async () => {
     try{
        //  const foobar = await API.graphql(graphqlOperation(createIngestionEvent, {input: testObject}));
        //  console.log('completed', foobar);

        const foobar = await API.graphql(graphqlOperation(getPoolSuccessfullBlockEventsProcessed, {id: 0} ));
        console.log('completed', foobar);
     }
     catch(e) {
         console.log(e);
     }    
   };

 foo();
 //############# GRAPHQL


//############# SECRET MANAGER
//  const foo = async () => {
//      const sm = new SecretsManager();
//      let test = await sm.getSecretValue('adexrio/wallets/mnemonics');     
//      console.log('test is', test);

//      let test2 = await sm.secretsMap.get('adexrio/wallets/mnemonics');
//      console.log('test2', test2);
//  }
//  foo();
//############# SECRET MANAGER

//############# BLOCKCHAIN SERVICE
 //const foo = async () => {

    //  const sm = new SecretsManager();
    //  const walletSecretDetails = await sm.getSecretValue('adexrio/wallets/mnemonics');
    //  const blockchainService = new BlockChainService(JSON.parse(walletSecretDetails.SecretString));
    //  await blockchainService.initializeWallet();


     //#BLOCKS, GET ALL TRANSACTIONS
    // const blockHeadNumber = blockchainService.walletService.connex.thor.status.head.number;
    // console.log('block head number', blockHeadNumber);

    // const block = await blockchainService.walletService.connex.thor.block(blockHeadNumber).get();
    // const blockTransactions = block.transactions;
    // console.log('blockTransactions', blockTransactions);

    // let allTransactions = [];


    // blockTransactions.forEach( async (trxId) => {
    //     console.log('ForEach loop transaction Id', trxId);
    //     const tx = await blockchainService.walletService.connex.thor.transaction(trxId).get();
    //     console.log('tx', tx);

    //     const receipt = await blockchainService.walletService.connex.thor.transaction(trxId).getReceipt();
    //     console.log('receipt is', receipt);

    //     const transactionData = {
    //         transaction: tx,
    //         receipt: receipt
    //     };
    //     allTransactions.push(transactionData);
    // });
    // console.log('All block transactions', allTransactions);  

    //#BLOCKS, GET ALL TRANSACTIONS    


    // #EVENTS
//     const allEventsArray = [];

//     const EVENTS = {
//         GameCreatedEvent: 'GameCreatedEvent',
//         PlayerJoinedGameEvent: 'PlayerJoinedGameEvent',
//         PlayerLeftGameEvent: 'PlayerLeftGameEvent',
//         GameAwaitingLotteryEvent: 'GameAwaitingLotteryEvent',
//         GameCompletedEvent: 'GameCompletedEvent'
//     }
//     const EVENT_TO_FILTER = 'GameCreatedEvent';

//     const sm = new SecretsManager();
//     const walletSecretDetails = await sm.getSecretValue('adexrio/wallets/mnemonics');
//     const blockchainService = new BlockChainService(JSON.parse(walletSecretDetails.SecretString));
//     await blockchainService.initializeWallet();
    
//     //* filter 
//     const filter = blockchainService.getFilterForEvent(
//         {
//             eventName: EVENTS.GameCompletedEvent,
//             startBlock: 0,
//             endBlock: blockchainService.walletService.connex.thor.status.head.number
//         }
//     );

//     console.log('filter is', filter);

//     const result = await blockchainService.executeFilterForEvent(filter, 0, 255, async (events) => {
//         console.log(events.length);
//         events.map(event => { allEventsArray.push(event) })
//     });
//     //* data from filter 

//     console.log('TestArray Length', allEventsArray.length);
    
//      allEventsArray.forEach((item) => {
//          console.log(item.decoded);
//     })
// #EVENTS
    
//  }


// foo().then(() => {
//      console.log('done');
//  });
//############# BLOCKCHAIN SERVICE