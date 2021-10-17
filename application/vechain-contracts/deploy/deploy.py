from thor_requests.connect import Connect
from thor_requests.wallet import Wallet
from thor_requests.contract import Contract

import os
import boto3 
import json 

import config;

print('BEGIN Deploy FOR...')
print(config.ENVIRONMENT['name'])

client = boto3.client('secretsmanager',  region_name = 'us-east-1' )
response = client.get_secret_value(
     SecretId='adexrio/wallets/mnemonics'    
 )

all_secrets = json.loads(response['SecretString'])
contract_owner = all_secrets[config.ENVIRONMENT['name']]['contract-owner']

#connector = Connect(config.ENVIRONMENT['host'])
connector = Connect('http://127.0.0.1') 


_wallet = Wallet.fromMnemonic(list(contract_owner['words'].split(" ")))
print(_wallet.address) # 0xf077b491b355e64048ce21e3a6fc4751eeea77fa

dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, '../build/contracts/RollItVetMultiPlayerGame.json')
print(filename)

_contract = Contract.fromFile(filename)

# deploy
res = connector.deploy(_wallet, _contract)
print(res)