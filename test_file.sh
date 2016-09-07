#!/bin/bash
FILENAME=$1

echo "Testing..."

if [[ -a $FILENAME ]]; then
  #statements
  echo "The file $FILENAME exists"
fi
