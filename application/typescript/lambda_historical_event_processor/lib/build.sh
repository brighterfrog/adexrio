#!/usr/bin/env bash
rm -rf ../src/*
rm -rf ../handler.zip

mkdir -p ../lib/library/codegen
mkdir -p ../lib/library/graphql

\cp -Rf ../../library/src/aws-services ../lib/library

\cp -Rf ../../library/src/codegen ../lib/library
\cp -Rf ../../library/src/graphql ../lib/library

\cp -Rf ../../library/src/aws-exports.js ../lib/library
\cp -Rf ../../library/src/amplify-bootstrapper ../lib/library

\cp -Rf ../../library/src/backend ../lib/library
\cp -Rf ../../library/src/contract-builds ../lib/library
