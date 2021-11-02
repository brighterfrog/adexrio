NETWORK_CONSTANTS = {    
    'development': {
        'name': 'development-network',
        'host': 'http://0.0.0.0:8669',
        'outputFileName': 'dev_contract_address.json'
    },
    'test': {
        'name': 'test-network',
        'host': 'https://vethor-node-test.vechaindev.com',
        'outputFileName': 'test_contract_address.json'
    },
    'main': {
        'name': 'main-network',
        'host': 'https://vethor-node.vechain.com',
        'outputFileName': 'main_contract_address.json'
    }
}

# development | test | main
ENVIRONMENT = NETWORK_CONSTANTS['test']
