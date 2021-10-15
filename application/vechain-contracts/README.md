### Truffle Migrate

From the vechain-contracts root workspace directory:

`npm run build:keys`

`npm run build:migrate`

run the key generation first BEFORE a migrate is possible

actual network deploy

this is only valid for local, override migrate --network flag for real

NOTES:

local development deploy works

need help to deploy to testnet and mainnet with truffle

TRUFFLE HELP

THOR_IP: sync-testnet.vechain.org
THOR_PROTOCOL: https
THOR_PORT: 443
for my web3 gear settings


and a KEYSTORE and PASSWORD for that

with no provider in my truffle config lets me deploy to vechain testnet

## DEPLOYMENT

`Environment configs are different per branch`
`manual deploys by branch`
`run the cmds below after changing to the vechain-contracts project`
`truffle compile`
`truffle migrate`
`check in build/contracts directory`

./node_modules/.bin/truffle migrate --development --reset

## DEPLOY TO TESTNET:

#### FROM vechain-contracts directory:

web3-gear --keystore="../wallets/keystore/vechain.test.owner.account.json" --passcode "<passcode from secrets manager>" --endpoint https://sync-testnet.vechain.org:443

./node_modules/.bin/truffle migrate --network development --reset
./node_modules/.bin/truffle migrate --network test --reset

## HOW TO
Wallets are manually created via Sync2
Necessary information placed into encrypted secretsmanager
This pre-deploy is to generate keystore files from secrets manager details to let web3-gear import the keystore for contract owner wallet deployment
If a smart contract deployment is not being done, we do not need the creation of the keystore FILES
The applications will read in address and keystore information in the front-end application and backend event listener to know where donation address location is, and know how to make calls as contract owner