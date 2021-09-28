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
WeirdFlex Club, [05.04.21 19:49]
THOR_IP: sync-testnet.vechain.org
THOR_PROTOCOL: https
THOR_PORT: 443
for my web3 gear settings

WeirdFlex Club, [05.04.21 19:50]
and a KEYSTORE and PASSWORD for that

WeirdFlex Club, [05.04.21 19:50]
with no provider in my truffle config lets me deploy to vechain testnet

## DEPLOYMENT

`Environment configs are different per branch`
`manual deploys by branch`
`run truffle compile`
`run truffle migrate`
`check in build/contracts directory`

./node_modules/.bin/truffle migrate --development --reset

## DEPLOY TO TESTNET:

#### FROM vechain-contracts directory:

web3-gear --keystore="../wallets/keystore/vechain.test.owner.account.json" --passcode "SFdxRw?5])DAbF8y(MQT" --endpoint https://sync-testnet.vechain.org:443

./node_modules/.bin/truffle migrate --network development --reset
./node_modules/.bin/truffle migrate --network test --reset
