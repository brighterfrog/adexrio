#!/usr/bin/env bash
rm -rf ../src/*
rm -rf ../dist/*

mkdir -p ../lib/library/codegen
mkdir -p ../lib/library/graphql

\cp -Rf ../../../../../src/aws-services ../lib/library

\cp -Rf ../../../../../src/codegen ../lib/library
\cp -Rf ../../../../../src/graphql ../lib/library

\cp -Rf ../../../../../src/aws-exports.js ../lib/library
\cp -Rf ../../../../../src/amplify-bootstrapper ../lib/library

\cp -Rf ../../../../../src/backend ../lib/library
\cp -Rf ../../../../../src/contract-builds ../lib/library
