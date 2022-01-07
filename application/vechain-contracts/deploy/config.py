NETWORK_CONSTANTS = {    
    'dev': {
        'name': 'development-network',
        'host': 'http://0.0.0.0:8669',
        'outputFileName': 'dev_contract_address.json'
    },
    'test': {
        'name': 'test-network',
        'host': 'https://vethor-node-test.vechaindev.com',
        'outputFileName': 'test_contract_address.json'
    },
    'prod': {
        'name': 'main-network',
        'host': 'https://vethor-node.vechain.com',
        'outputFileName': 'prod_contract_address.json'
    }
}

# dev | test | prod
ENVIRONMENT = NETWORK_CONSTANTS['dev']
