#!/bin/bash
set -e
IFS='|'
args=("$@")

appId=""
envName=""
useProfile="false"
profileName="default"
for ((argPos=0; argPos <= ${#args}; argPos++))
do
  if [ "${args[$argPos]}" == "--appId" ]; then
    appId="${args[(($argPos+1))]}"
    argPos=$((argPos+1))
  elif [ "${args[$argPos]}" == "--envName" ]; then
    envName="${args[(($argPos+1))]}"
    argPos=$((argPos+1))
  elif [ "${args[$argPos]}" == "--useProfile" ]; then
    useProfile="true"
  elif [ "${args[$argPos]}" == "--profileName" ]; then
    profileName="${args[(($argPos+1))]}"
    argPos=$((argPos+1))
  fi
done

AWSCLOUDFORMATIONCONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":${useProfile},\
\"profileName\":\"${profileName}\"\
}"
AMPLIFY="'{\
\"appId\":\"${appId}\",\
\"envName\":\"${envName}\"\
}'"
PROVIDERS="'{\
\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG\
}'"

cmd="amplify pull --providers ${PROVIDERS} --amplify ${AMPLIFY} --yes"
echo $cmd
eval $cmd