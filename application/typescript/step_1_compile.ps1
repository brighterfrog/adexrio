$folders = @(
    'library',
    'backend-blockchain-ticker',
    'lambda_block_event_processor',
    'lambda_historical_event_processor'
)
foreach($folder in $folders) {
    echo "BUILDING $folder" &&
    cd $folder && npm install && tsc && cd -;
}
echo 'tsc DONE';

