$folders = @('library', 'backend-blockchain-ticker', 'lambda_block_event_processor', 'lambda_historical_event_processor')
$folders | ForEach-Object {
    $folder = $_
    $location = Get-Location    
    echo "BUILDING $folder, will run CD $location/$folder" && cd $location/$folder && npm install && tsc --build && cd .. && echo "CURRENT PATH: $pwd.path" && echo "...moving to next folder";
}
echo 'STEP_1_COMPILE.PS1 DONE';

# RUNS TSC TO COMPILE TYPESCRIPT ON THE ABOVE PROJECTS
