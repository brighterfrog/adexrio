#!/usr/bin/env bash
mkdir -p ../lib/codegen
mkdir -p ../lib/graphql
mkdir -p ../lib/services/legacy_contract_v1_helpers/backend

cp -r ../../../../../../library/src/codegen ../lib/
cp -r ../../../../../../library/src/graphql ../lib/

cp -r ../../../../../../library/src/aws-exports.js ../lib/
cp -r ../../../../../../library/src/amplify-bootstrapper ../lib

cp -r ../../../../../../library/src/backend ../lib/services/legacy_contract_v1_helpers

rm -rf ../src/index*