NETWORK_CONSTANTS = {    
    'development': {
        'name': 'development-network',
        'host': 'http://0.0.0.0:8669'
    },
    'test': {
        'name': 'test-network',
        'host': 'https://vethor-node-test.vechaindev.com'
    },
    'main': {
        'name': 'main-network',
        'host': 'https://vethor-node.vechain.com'
    }
}

# development | test | main
ENVIRONMENT = NETWORK_CONSTANTS['main']
