NETWORK_CONSTANTS = {    
    'development': {
        'name': 'development-network',
        'host': 'http://0.0.0.0:8669'
    },
    'test': {
        'name': 'test-network',
        'host': '"http://testnet.veblocks.net"'
    },
    'main': {
        'name': 'main-network',
        'host': 'https://mainnet.veblocks.net'
    }
}


# read from "contract-owner", properties words | password

ENVIRONMENT = NETWORK_CONSTANTS['development']