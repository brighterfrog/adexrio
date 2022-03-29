#!/usr/bin/env bash
rm -rf ../src/*

mkdir -p ../lib/library/codegen
mkdir -p ../lib/library/graphql
mkdir -p ../lib/library/services/legacy_contract_v1_helpers/backend
mkdir -p ../lib/library/services/legacy_contract_v1_helpers/contract-builds

cp -r ../../library/src/codegen ../lib/library
cp -r ../../library/src/graphql ../lib/library

cp -r ../../library/src/aws-exports.js ../lib/library
cp -r ../../library/src/amplify-bootstrapper ../lib/library

cp -r ../../library/src/backend ../lib/library/services/legacy_contract_v1_helpers
cp -r ../../library/src/contract-builds ../lib/library/services/legacy_contract_v1_helpers
