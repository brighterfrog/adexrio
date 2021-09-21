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

initial setup: `amplify pull --appId d3nhl82tha81mm --envName dev --profile cicd`
sync upstream changes: `amplify pull`

manually rename aws-exports.js to aws-exports.ts
manually copy API.ts from angular-web project
