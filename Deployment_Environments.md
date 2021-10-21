## MUST BUILD AND DEPLOY VECHAIN CONTRACTS FIRST
Build vechain contracts
Build anguarl-web-app
Build backend-event-listener

Migrate contracts to chain with truffle
Check in build contract folder
Deploy changes to correct environment

Development / Test/ Production

Development uses localhost configs, and requires local solo node 
Test uses Testnet
Production uses mainnet

## PROJECT CHECKLIST BRANCH DEPLOYMENTS

`backend-eventlistener : elastic beanstalk env deploy`
Procfile should be:
web: cd backend-eventlistener && npm run release:dev
web: cd backend-eventlistener && npm run release:test
web: cd backend-eventlistener && npm run release:prod

ENSURE GLOBAL-SERVICE has correct amplify pull config

## codebuild && pipelines

Builds and deploys to elastic environment
Separated by build projects for Test & Production branch
Development is local
