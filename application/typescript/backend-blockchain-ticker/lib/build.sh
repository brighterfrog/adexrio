#!/usr/bin/env bash

mkdir -p ../lib/library
rm -rf ../src/*

cp -r ../../library/src/amplify-bootstrapper ../lib/library
cp -r ../../library/src/codegen ../lib/library
cp -r ../../library/src/graphql ../lib/library
cp -r ../../library/src/aws-exports.js ../lib/library
