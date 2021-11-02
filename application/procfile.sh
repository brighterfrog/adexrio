if [ $NODE_ENV == "dev" ]; then
    echo 'Procfile environment script for dev'
    cd backend-eventlistener && npm run release:dev
fi
if [ $NODE_ENV == "test" ]; then
    echo 'Procfile environment script for test'
    cd backend-eventlistener && npm run release:test
fi
if [ $NODE_ENV == "prod" ]; then
    echo 'Procfile environment script for prod'
    cd backend-eventlistener && npm run release:prod
fi
