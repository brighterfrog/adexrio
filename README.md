## Added commands

- `lsof -t -i tcp:5001 | xargs kill` kill localhost
- `python3 -m pip install -r requirements.txt` Install requirements.txt
kill -9 $(lsof -i tcp:4200 -t)

## Testing angular

ng test --include='\*\*/costpergame-service.spec.ts'

## VeChain Related

- Nodes
  Mainnet public node: https://vethor-node.vechain.com
  Testnet public node: https://vethor-node-test.vechaindev.com

- Docker VeChain node
  docker pull vechain/thor
  docker run vechain/thor --network solo
  docker run --rm --name mynode -p 127.0.0.1:8669:8669 -p 11235:11235 -p 11235:11235/udp vechain/thor solo --api-addr 0.0.0.0:8669 --api-cors "\*"  
  docker kill mynode

add network to sync in upper left
http://localhost:8669


$ pyenv virtualenv 3.6.8 myproject
$ pyenv local myproject


# How to run
solo node - ubuntu docker
Frontend - powershell
backend-eventlistener - powershell
deploys - python virtual environment (del-me-test) user@DESKTOP:/adexrio/application/vechain-contracts/deploy
        -  cd to /adexrio/application/vechain-contracts/deploy
        -  pyenv local del-me-test
        -  run deploy.sh

Architecture / Infrastructure tech stack:

Front-End: Angular, Sync2
Backend-eventlistener ( VeChain Blockchain ): Nodejs
VeChain-Contracts: Brownie, thor-requests.py for deploy
GitHub
AWS Elastic Beanstalk
AWS CodeBuild
AWS CodePipelines
AWS Amplify
AWS GraphQL
AWS SecretManager

Dev dev.adexr.io, 
Test test.adexr.io 
Prod adexr.io

