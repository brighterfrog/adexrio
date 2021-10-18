const KS = require('thor-devkit/dist').Keystore;
const mnemonic = require('thor-devkit').mnemonic;
const fs = require('fs');
const AWS = require('aws-sdk');
const getSecretValue = require('../aws-services/secrets-manager');

async function buildKeystoreFilesAndAddressesFromSecretsManager(input) {

 return getSecretValue(input.secretName).then( (data) => {
    console.log( JSON.parse(data.SecretString));

    // only reading contract-owner to build deployment keystore for web3-gear
    var networkSecret = JSON.parse(data.SecretString)[input.network]; 

    var contractOwner = networkSecret['contract-owner'];

    var pkBytes = mnemonic.derivePrivateKey(contractOwner.words.split(' '));
    KS.encrypt(pkBytes, contractOwner.password).then( keystore => {
      console.log(pkBytes);
      console.log(keystore);  
      
      fs.writeFileSync(input.outputPathKeystore, JSON.stringify(keystore));       
    });
       
    var donationOwner = networkSecret['donation-wallet-owner'];
    var pkBytes = mnemonic.derivePrivateKey(donationOwner.words.split(' '));
    KS.encrypt(pkBytes, donationOwner.password).then( keystore => {
      console.log(pkBytes);
      console.log(keystore);  
      fs.writeFileSync(input.outputPathDonationAddress, keystore.address);       
    });

  }).catch ((err) => {
    console.log(err);
  });
}


buildKeystoreFilesAndAddressesFromSecretsManager( {
  secretName: 'adexrio/wallets/mnemonics',
  network: 'development-network',
  outputPathKeystore: "./../../wallets/sync2/deployment_keystore/vechain.dev.owner.account.json",
  outputPathDonationAddress: "./../../wallets/sync2/addresses/vechain.dev.donation.address.json",
});
buildKeystoreFilesAndAddressesFromSecretsManager( {
  secretName: 'adexrio/wallets/mnemonics',
  network: 'test-network',
  outputPathKeystore: "./../../wallets/sync2/deployment_keystore/vechain.test.owner.account.json",
  outputPathDonationAddress: "./../../wallets/sync2/addresses/vechain.test.donation.address.json",
});
buildKeystoreFilesAndAddressesFromSecretsManager( {
  secretName: 'adexrio/wallets/mnemonics',
  network: 'main-network',
  outputPathKeystore: "./../../wallets/sync2/deployment_keystore/vechain.main.owner.account.json",
  outputPathDonationAddress: "./../../wallets/sync2/addresses/vechain.main.donation.address.json",
});


// OLD WAY OF EXPORTED KEYSTORE WRITING PK 
// PUT THIS BACK IF DOESNT WORK

// async function getPrivateKeyFromKeystore(inputFilepath, password, outputPath) {
//   const keystore = fs.readFileSync(inputFilepath).toString().trim();

//   const keystoreObject = JSON.parse(keystore);
//   return KS.decrypt(keystoreObject, password)
//     .then((result) => {
//       const pk = result.toString('hex');
//       fs.writeFileSync(outputPath, pk);
//       return pk;
//     });
// }


// getPrivateKeyFromKeystore(
//   "./../../wallets/keystore/vechain.dev.owner.account.json",
//   'p@ssWordGoesHere',
//   "./pks/vechain.dev.owner.account.pk")
// .then((pk) => {
//   devPk = pk;
//   devPkDone = true;
// });

// getPrivateKeyFromKeystore(
//   "./../../wallets/keystore/vechain.test.owner.account.json",
//   'p@ssWordGoesHere',
//   "./pks/vechain.test.owner.account.pk")
// .then((pk) => {
//   testPk = pk;
//   testPkDone = true;
// });

// getPrivateKeyFromKeystore(
//   "./../../wallets/keystore/vechain.prod.owner.account.json",
//   'p@ssWordGoesHere',
//   "./pks/vechain.prod.owner.account.pk"
// )
// .then((pk) => {
//   prodPk = pk;
//   prodPkDone = true;
// });