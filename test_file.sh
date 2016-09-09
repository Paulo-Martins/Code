#!/bin/bash
FILENAME=$1

echo "Testing..."

if [[ -a $FILENAME ]]; then
  #statements
  echo "The file $FILENAME exists"
else
  #statements
  echo "The file $FILENAME does not exist"
fi
