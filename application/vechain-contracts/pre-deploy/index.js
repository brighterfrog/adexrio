const KS = require('thor-devkit/dist').Keystore;
const mnemonic = require('thor-devkit').mnemonic;
const fs = require('fs');


async function getPrivateKeyFromKeystore(inputFilepath, password, outputPath) {
  const keystore = fs.readFileSync(inputFilepath).toString().trim();

  const keystoreObject = JSON.parse(keystore);
  return KS.decrypt(keystoreObject, password)
    .then((result) => {
      const pk = result.toString('hex');
      fs.writeFileSync(outputPath, pk);
      return pk;
    });
}

getPrivateKeyFromKeystore(
  "./../../wallets/keystore/vechain.dev.owner.account.json",
  "password",
  "./pks/vechain.dev.owner.account.pk")
.then((pk) => {
  devPk = pk;
  devPkDone = true;
});

getPrivateKeyFromKeystore(
  "./../../wallets/keystore/vechain.test.owner.account.json",
  'SFdxRw?5])DAbF8y(MQT',
  "./pks/vechain.test.owner.account.pk")
.then((pk) => {
  testPk = pk;
  testPkDone = true;
});

getPrivateKeyFromKeystore(
  "./../../wallets/keystore/vechain.prod.owner.account.json",
  'SFdxRw?5])DAbF8y(MQT',
  "./pks/vechain.prod.owner.account.pk"
)
.then((pk) => {
  prodPk = pk;
  prodPkDone = true;
});