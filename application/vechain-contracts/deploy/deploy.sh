declare -a projectArray=("typescript/library")
arraylength=${#projectArray[@]}

# BUILD & COMPILE 
cd ../brownie && brownie compile && cd ../deploy && python3 deploy.py;

# UPDATE BUILD CONTRACT OUTPUT TO LIBRARY
for (( i=0; i<${arraylength}; i++ ));
do
  echo "index: $i, value: ${projectArray[$i]}"
  mkdir -p ../../${projectArray[$i]}/src/contract-builds/contracts && 
  mkdir -p ../../${projectArray[$i]}/src/contract-builds/adexrio_contract_address &&
  echo "Command to execute: cp -r ../brownie/build/contracts ../../${projectArray[$i]}/src/contract-builds" &&
  cp -r ../brownie/build/contracts ../../${projectArray[$i]}/src/contract-builds/ &&
  echo "Command to execute: cp -r ../brownie/adexrio_contract_address ../../${projectArray[$i]}/src/contract-builds" &&
  cp -r ../brownie/adexrio_contract_address ../../${projectArray[$i]}/src/contract-builds/
done

 # UPDATE LIBRARY PACKAGE
 cd .. && cd .. && cd typescript && npm run compile:windows;
 ## LIBRARY TSC FIRST
 ## UPDATE LIBRARY PACKAGE
 ## RUN COMPILE ALL PROJECTS
# cd .. && cd .. && cd typescript/library && tsc && cd .. && cd .. && cd typescript && pwd
# npm run library:up_windows &&
# npm run compile:windows;



echo 'DEPLOY.SH DONE';