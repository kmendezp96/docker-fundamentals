#!/bin/bash
IMAGES=`docker images "ruj-api-design*" -q`
if [ -n "$IMAGES" ]; then
    docker rmi -f $IMAGES
fi
LASTCONTAINER=$(eval  docker ps | awk 'NR==2{print $1}')
if [ -n "$LASTCONTAINER" ]; then
    docker rm -f $LASTCONTAINER
fi
LASTIMAGE=$(eval  docker images | awk 'NR==2{print $3}')
if [ -n "$LASTIMAGE" ]; then
    docker rmi -f $LASTIMAGE
fi
