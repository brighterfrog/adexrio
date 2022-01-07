declare -a projectArray=("angular-web-app" "typescript/lambda_block_event_processor" "typescript/lambda_historical_event_processor")
arraylength=${#projectArray[@]}

cd ../brownie && brownie compile && cd ../deploy && python3 deploy.py &&
for (( i=0; i<${arraylength}; i++ ));
do
  echo "index: $i, value: ${projectArray[$i]}"
  mkdir -p ../../${projectArray[$i]}/src/adexr_contract_output/dist && 
  echo "Command to execute: cp -r ../brownie/build/contracts ../../${projectArray[$i]}/src/adexr_contract_output/dist" &&
  cp -r ../brownie/build/contracts ../../${projectArray[$i]}/src/adexr_contract_output/dist &&
  echo "Command to execute: cp -r ../brownie/adexrio_contract_address ../../${projectArray[$i]}/src/adexr_contract_output/dist/addresses" &&
  cp -r ../brownie/adexrio_contract_address ../../${projectArray[$i]}/src/adexr_contract_output/dist/addresses
done

 