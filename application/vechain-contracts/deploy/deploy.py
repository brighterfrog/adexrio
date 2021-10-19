from thor_requests.connect import Connect
from thor_requests.wallet import Wallet
from thor_requests.contract import Contract

import os
import boto3 
import json 

import config;

print('BEGIN Deploy FOR...')
print(config.ENVIRONMENT['name'])

# configure
client = boto3.client('secretsmanager',  region_name = 'us-east-1' )
response = client.get_secret_value(
     SecretId='adexrio/wallets/mnemonics'    
 )

all_secrets = json.loads(response['SecretString'])
contract_owner = all_secrets[config.ENVIRONMENT['name']]['contract-owner']

connector = Connect(config.ENVIRONMENT['host']) 

_wallet = Wallet.fromMnemonic(list(contract_owner['words'].split(" ")))
print(_wallet.address)

dirname = os.path.dirname(__file__)
# configure


# RollIt
rollItFilename = os.path.join(dirname, '../brownie/build/contracts/RollItVetMultiPlayerGame.json')

_contract = Contract.fromFile(rollItFilename)

res = connector.deploy(_wallet, _contract)
txId = res.get('id') 
connector.wait_for_tx_receipt(tx_id=txId, timeout=20)

receipt = connector.get_tx_receipt(txId) 
deployed_contract_address = receipt.get('outputs')[0]['contractAddress']
print('Contract deployed to address : {0}'.format(deployed_contract_address))

contract_address_outputfile = os.path.join(dirname, '../brownie/adexrio_contract_address/contract_address.json')
with open(contract_address_outputfile,'w') as output_file:
     json.dump({
        "address" : deployed_contract_address   
},  output_file)


print('Writing contract address to file')
print('Complete')