# not used
# commented out from deploy 

$folders = @{
    'angular-web-app' = "../typescript/library"
    'typescript/backend-blockchain-ticker' = "../library"
    'typescript/lambda_block_event_processor'  = "../library"
    'typescript/lambda_historical_event_processor'  = "../library"
}
pwd
cd library && echo "Packing new library version" &&
npm version patch -git-tag-version false
$filename = npm pack
echo "New package filename is $filename" &&
cd .. && cd .. &&
echo "UPDATING PROJECTS TO LATEST PACKAGE"
$location = Get-Location
$folders.GetEnumerator() | ForEach-Object{
    $folder = $_.key 
    $folderNavigation = $_.value
    echo "Processing $folder"
    cd $location/$folder
    npm install "$folderNavigation/$filename"
    echo "HERE at $pwd.Path"
    cd ..            
}

echo 'STEP_2_LIBRARY_UPDATE.PS1 DONE';
## UPDATES PACKAGE FILE
## PACKS LIBRARY
## INSTALLS NEW LIPBRARY PACKAGE INTO THE PROJECTS ABOVE IN THE HASHTABLE

