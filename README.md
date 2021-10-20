# Welcome to your CDK Python project!

This is a blank project for Python development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

This project is set up like a standard Python project. The initialization
process also creates a virtualenv within this project, stored under the `.venv`
directory. To create the virtualenv it assumes that there is a `python3`
(or `python` for Windows) executable in your path with access to the `venv`
package. If for any reason the automatic creation of the virtualenv fails,
you can create the virtualenv manually.

To manually create a virtualenv on MacOS and Linux:

```
$ python3 -m venv .venv
```

After the init process completes and the virtualenv is created, you can use the following
step to activate your virtualenv.

```
$ source .venv/bin/activate
```

If you are a Windows platform, you would activate the virtualenv like this:

```
% .venv\Scripts\activate.bat
```

Once the virtualenv is activated, you can install the required dependencies.

```
$ pip3 install -r requirements.txt
```

At this point you can now synthesize the CloudFormation template for this code.

```
$ cdk synth
```

To add additional dependencies, for example other CDK libraries, just add
them to your `setup.py` file and rerun the `pip install -r requirements.txt`
command.

## Useful commands

- `cdk ls` list all stacks in the app
- `cdk synth` emits the synthesized CloudFormation template
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk docs` open CDK documentation
- `npm install -g aws-cdk` Install latest version of cdk ( run with sudo)

## Casey Added commands

- `lsof -t -i tcp:5001 | xargs kill` kill localhost
- `python3 -m pip install -r requirements.txt` Install requirements.txt
- `export CDK_NEW_BOOTSTRAP=1 npx cdk bootstrap --profile cicd --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess --trust 891289117461 aws://358014180655/us-east-1`

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
deploys - python virtual environment (del-me-test) user@DESKTOP:/mnt/d/source/github/adexrio/application/vechain-contracts/deploy$ 
        -  cd to /mnt/d/source/github/adexrio/application/vechain-contracts/deploy
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

Dev/Test/Production tiers
dev.adexr.io, test.adexr.io, adexr.io

