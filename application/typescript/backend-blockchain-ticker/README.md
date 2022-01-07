## FOR DEVELOPMENT

RUN WITH
npm run local:dev

kill -9 $(lsof -i tcp:3000 -t)

# WALLET Info

`Services`
Description:
DEV: Use default wallets
TEST/PROD: Wallets are manually created and exported keystore values are placed in the keystore files

`Loading in Wallets into devices`
To load these in new Wallet apps, import the private key, pw in blockchain-wallet-service

# DEPLOYMENTS

run
need to use these owner wallets

# AMPLIFY INITIAL SETUP

initial setup: `amplify pull --appId <appId> --envName dev --profile cicd`
sync upstream changes: `amplify pull`

`npm run compile or build:tsc`
