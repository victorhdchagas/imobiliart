#!/bin/bash

echo -n "commit message: "
read commitMessage

git add .
git commit -m "$commitMessage"
git branch -M dev
git push -u origin dev