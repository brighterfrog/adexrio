$folders = @(
    'backend-blockchain-ticker',
    'lambda_block_event_processor',
    'lambda_historical_event_processor'
)
pwd;
cd library && echo "Packing new library version";
npm version patch -git-tag-version false;
$filename = npm pack;
echo "New package filename is $filename";
cd ..;
echo "UPDATING PROJECTS TO LATEST PACKAGE";
foreach($folder in $folders) {
    cd $folder && npm install "../library/$filename" && cd ..;
}

echo 'DONE '

