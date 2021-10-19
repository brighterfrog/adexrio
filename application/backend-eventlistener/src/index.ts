// import { thorify } from "thorify";

// import { BlockChainService } from "./blockchain-helpers/blockchain-service";
import { BlockChainService } from "./blockchain/blockchain-service";
import { GameOrchestratorService } from "./game-orchestrator/game-orchestrator-service";
import { GameSummaryApiService } from "./game-orchestrator/game-summary-api-service";
import { GameEvent, GameStatus, RandomOrgSecretDetails, WalletSecretDetails } from "./models/all-models";
//import { GlobalService } from "./globals/global-service";
import { GlobalErrorService } from "./globals/global-error-service";
//import API from "@aws-amplify/api";
import { APIService } from "./API";
import { SecretsManager } from "./aws-services/secrets-manager";

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

import AWS from 'aws-sdk'
import Amplify from 'aws-amplify';

const awsmobile = require('./aws-exports');

 AWS.config.getCredentials(function(err) {
     if (err) console.log(err.stack);     
     else {
       console.log("Access key:", AWS.config.credentials.accessKeyId);
     }
 });
Amplify.configure(awsmobile.default);
Amplify.Auth.configure({
  mandatorySignIn: false
})

//ALSO IN TESTS

// const globalService = new GlobalService();
// globalService.registerAmplify();

// const { BlockChainService } = require("./blockchain-helpers/blockchain-service");
// const { RollitBlockchainEventListener } = require("./blockchain-helpers/blockchain-event-listener");

//const { RandomOrgApiService, RandomDrawGame } = require("./random_org/random-org-service");

const http = require('http');


// const hostname = process.env.VECHAIN_API_NODE;
// const Web3 = require("web3");
// const web3 = thorify(new Web3(), process.env.VECHAIN_API_NODE);



// console.log(RollItVetMultiPlayerGameDefinition);
// const contractInstance = new web3.eth.Contract(
//     RollItVetMultiPlayerGameDefinition.abi,
//     getContractAddressForRollIt()
// );

/// BLOCKCHAIN EVENT LISTENER HOOKUP
// const events = new RollitBlockchainEventListener(contractInstance).Register();


// contractInstance.events.GameStartedEvent(function (error, event) { console.log(error); })
//     .on('data', function (event) {
//         console.log('data');
//         console.log(event); // same results as the optional callback above
//     })
//     .on('changed', function (event) {
//         console.log('changed');
//         console.log(event);
//         // remove event from local database
//     })
//     .on('error', function (event) {
//         console.log('error');
//         console.log(event);
//     });

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req: any, res: any) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log('Server process started...');
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');

var secretsManager = new SecretsManager(AWS);

var apiService = new APIService();
var errorService = new GlobalErrorService(apiService);
var randomOrgSecretDetails: RandomOrgSecretDetails;
var walletSecretDetails: WalletSecretDetails;

function preLoadApplicationSecrets(): Promise<void> {
  const resultPromise = new Promise<void>(
    (resolve, reject) => {

      Promise.all([
        secretsManager.getSecretValue("apikeys/randomorg/account")
                      .then( (data) => {
                          console.log("secret result fetch block");
                          
                          var secret = JSON.parse(data.SecretString);
                          console.log(secret.login);
                          console.log(secret.password);
                  
                          randomOrgSecretDetails = secret;
                          
                      }).catch( (err) => {
                          console.log(err);  
                          errorService.logError(err);            
                      }),

          secretsManager.getSecretValue("adexrio/wallets/mnemonics")
                      .then( (data) => {
                          console.log("secret result fetch block");
                          
                          var secret = JSON.parse(data.SecretString);
                          console.log(secret);
                          
                          walletSecretDetails = secret;
                          
                      }).catch( (err) => {
                          console.log(err);  
                          errorService.logError(err);            
                      })
                     ])
      .then( ()=> {
        resolve();
      });

    }
  )
  return resultPromise;
}

preLoadApplicationSecrets().then( () => {
  console.log('done with preLoadApplicationSecrets()');
  console.log(' WALLET SECRET DETAILS:');
  console.log(walletSecretDetails);

  console.log(' RANDOMORG SECRET DETAILS:');
  console.log(randomOrgSecretDetails);
  
  var gos = new GameOrchestratorService(walletSecretDetails, randomOrgSecretDetails, apiService, errorService);   
    
      gos.blockChainService.walletService.importWalletFromKeystore()
      .then(() => {
          console.log('done importing wallet configuration');
          console.log('registering blockchain event listeners');
          
          gos.registerBlockchainEventSubscriptions();
          gos.registerGameSummaryApiToEvents();
          gos.registerGameProcessLimboService();                      
  

          // TEST Startup cases
          //  gos.blockChainService.getGameById(0).then((r) => {
          //      console.log(r);
          //  });

          //  gos.blockChainService.getGameById(1).then((r) => {
          //     console.log(r);
          //  });

          // gos.blockChainService.TestGetALLEventsFor().then((r: any) => {
          //     console.log(r);
          //  })

          //  gos.blockChainService.TestGetPausedMode().then((r) => {
          //     console.log(r);
          // }).then(() => {
          //     return gos.blockChainService.TestSetPaused();
          // }).then((r) => {
          //     console.log(r);
          // }).then(() => {
          //     return gos.blockChainService.TestGetPausedMode();
          // }).then((r) => {
          //     console.log(r);
          // });



          //  gos.blockChainService.TestSetUnPaused().then((r) => {
          //      console.log(r);
          //  }).then(() => {
          //          return gos.blockChainService.TestGetPausedMode();
          // }).then((r) => {
          //          console.log(r);
          // });

          //TEST
          //  gos.blockChainService
          //  .eventListener
          //  .gameAwaitingLotteryEvent.next( new GameEvent(0, 2, 1617728440));


          //TEST
          // gos.blockChainService.getEligiblePlayersForLotteryByGameId(1).then((r) => {
          //     console.log(r);
          // }).catch((err) => {
          //     console.log(err);
          // });

          // gos.blockChainService.getGameById(26).then((g) => {
          //     console.log(g);
          // })

     

      
    });
  });



//var bcs = new BlockChainService();

//testing get game call for detail
// bcs.getGames().then(function (resp: any) {
//     console.log(resp);
//     console.log('worked 2');
// }).catch((err) => {
//     console.log('error in getGames()');
//     console.log(err);
// });;
