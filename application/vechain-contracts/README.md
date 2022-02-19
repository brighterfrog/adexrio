### Keys

From the vechain-contracts root workspace directory:

`npm run build:keys`

## HOW TO
Wallets are manually created via Sync2
Necessary information placed into encrypted secretsmanager
This pre-deploy is to generate keystore files from secrets manager details to let web3-gear import the keystore for contract owner wallet deployment
If a smart contract deployment is not being done, we do not need the creation of the keystore FILES
The applications will read in address and keystore information in the front-end application and backend event listener to know where donation address location is, and know how to make calls as contract owner

application/vechain-contracts/deploy$ python deploy.py

From the vechain-contracts/deploy workspace directory:
# RUN FROM WSL #
`./deploy.sh`
`Immediately update the library package, and the subscriber version numbers`

From the typescript directory
`npm run compile`
`npm run library:up_windows`



# Future adds
Smart contract pool add event data for:
