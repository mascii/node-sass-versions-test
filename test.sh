#!/bin/bash

if [ "$1" = "" ]
then
    echo "[usage] test.sh scss-file"
else
    FILE=$1 docker-compose up
fi

