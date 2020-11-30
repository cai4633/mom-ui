#!/usr/bin/env bash

yarn build &&
cd dist && 
git init &&
git add -A &&
git commit -m $1 || git commit -m "v1.x" &&
git remote add origin git@github.com:cai4633/mom-ui-doc.git &&
git push -u origin master -f &&
cd -
echo '=========================================================================================='
echo 'deploy successfully!'