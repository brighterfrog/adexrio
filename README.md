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
  Mainnet public node: https://vethor-pubnode.digonchain.com/doc/swagger-ui/
  Testnet public node: https://vethor-node-test.vechaindev.com/doc/swagger-ui/

- Docker VeChain node
  docker pull vechain/thor
  docker run vechain/thor --network solo
  docker run --rm --name mynode -p 127.0.0.1:8669:8669 -p 11235:11235 -p 11235:11235/udp vechain/thor solo --api-addr 0.0.0.0:8669 --api-cors "\*"
  docker kill mynode

add master wallets to sync
Address, Privatekey
0x7567d83b7b8d80addcb281a71d54fc7b3364ffed, 0xdce1443bd2ef0c2631adc1c67e5c93f13dc23a41c18b536effbbdcbcdb96fb65
0xd3ae78222beadb038203be21ed5ce7c9b1bff602, 0x321d6443bc6177273b5abf54210fe806d451d6b7973bccc2384ef78bbcd0bf51
0x733b7269443c70de16bbf9b0615307884bcc5636, 0x2d7c882bad2a01105e36dda3646693bc1aaaa45b0ed63fb0ce23c060294f3af2
0x115eabb4f62973d0dba138ab7df5c0375ec87256, 0x593537225b037191d322c3b1df585fb1e5100811b71a6f7fc7e29cca1333483e
0x199b836d8a57365baccd4f371c1fabb7be77d389, 0xca7b25fc980c759df5f3ce17a3d881d6e19a38e651fc4315fc08917edab41058
0x5e4efedf3d71232340280d8bc475421352994b63, 0x88d2d80b12b92feaa0da6d62309463d20408157723f2d7e799b6a74ead9a673b
0x29f72dc07224a4c6270407bfd6b8fec559d29f6c, 0xfbb9e7ba5fe9969a71c6599052237b91adeb1e5fc0c96727b66e56ff5d02f9d0
0x47109a193c49862c89bd76fe2de3585743dd2bb0, 0x547fb081e73dc2e22b4aae5c60e2970b008ac4fc3073aebc27d41ace9c4f53e9
0xa5e255d4c65af201b97210ff4cd9521a46427654, 0xc8c53657e41a8d669349fc287f57457bd746cb1fcfc38cf94d235deb2cfca81b
0x0489a3fff1930b85f1d73eff8a4699281aadb558, 0x87e0eba9c86c494d98353800571089f316740b0cb84c9a7cdf2fe5c9997c7966

add network to sync in upper left
http://localhost:8669

## Truffle related STEPS for vechain-contracts: Run steps 2 and 3

- ./node_modules/.bin/truffle init
- ./node_modules/.bin/truffle compile
- ./node_modules/.bin/truffle migrate --development ( requires web3-gear running: 'web3-gear')
- ./node_modules/.bin/truffle truffle debug "0xb90782cae81c192f8d7dda2a87beed5dfa76173f73b282ca200c1000a1b11d64" <TxID>

## Contract changes

- make contract change
- run truffle compile
- run truffle test
- run truffle migrate to environment

CREATE NEW REPO
use https grc, clone repo
codecommit::us-east-1://adexr

local development:
run docker vechain node
run backend-eventlistener
run angular serve
connect to development tier aws dynamodb

CICD mono repo
development tier ( start / stop when not using resources )
contracts deployed to elastic vechain node
elastic vechain node
elastic beanstalk backend-eventlistener
angular deployed to s3 hosted

test tier
development tier ( start / stop when not using resources )
contracts deployed to test network node
vechain node connected to test network
elastic beanstalk backend-eventlistener
angular deployed to s3 hosted

test tier
development tier ( start / stop when not using resources )
contracts deployed to prod network node
vechain node connected to test network
elastic beanstalk backend-eventlistener
angular deployed to s3 hosted

need to figure out:
build & compile vechain contracts, dump them to s3 will work for cloud but not local env
use amplify to retrieve them

create shared typescript lib
create event codes there

//look into GET PAST EVENTS for GameCreatedEvents
//for query and filtering for grid values

update main angular app to listen for game status changes to update grid
update backend-eventlistener to begin processing game status changes
-check status code
-get game info
-check if audit is enabled
-if not, do randomized drawing and update
-if so, submit to random.org game info
-update smart contract gameid winner address to kick off payout

implement healthcheck on listener
implement deploy
implement logging

sample events

WatchGameCreatedEvents data
{
address: '0xf832ff7eb99fc863104f0eeac3d481802c895da1',
meta: {
blockID: '0x000008133bbed7e6758c891422c5c4bb7692a74449e89b18baa16b1f8adc6fa8',
blockNumber: 2067,
blockTimestamp: 1617251140,
txID: '0xa2f62b92689f255031b4816ce17dfc3d0decffc66ac3c516de57d130e5949ff4',
txOrigin: '0xd3ae78222beadb038203be21ed5ce7c9b1bff602',
clauseIndex: 0
},
removed: false,
returnValues: Result { '0': '1', gameId: '1' },
event: 'GameCreatedEvent',
signature: '0x2a42da9db95ddbe5b055413bc2d34eb481073b0ffd44c14c206692d1b5227707',
raw: {
data: '0x0000000000000000000000000000000000000000000000000000000000000001',
topics: [
'0x2a42da9db95ddbe5b055413bc2d34eb481073b0ffd44c14c206692d1b5227707'
]
}
}
WatchGameStatusChangedEvents data
{
address: '0xf832ff7eb99fc863104f0eeac3d481802c895da1',
meta: {
blockID: '0x0000081e6239c30542f1ca68bfc0df14f822f4328e0efbdffafbee8305f9e314',
blockNumber: 2078,
blockTimestamp: 1617251250,
txID: '0x18b9b3a63436f4262670c5bfff035eb7e736838062cfd90f81ae7338b52e5cdb',
txOrigin: '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed',
clauseIndex: 0
},
removed: false,
returnValues: Result { '0': '0', '1': '2', gameId: '0', status: '2' },
event: 'GameStatusChanged',
signature: '0x181ef3b670ec5c90bc462c33797900baea498c374db93759e537c015af932732',
raw: {
data: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002',
topics: [
'0x181ef3b670ec5c90bc462c33797900baea498c374db93759e537c015af932732'
]
}
}

$ pyenv virtualenv 3.6.8 myproject
$ pyenv local myproject
