#!/bin/bash
VERSION="v.$(eval grep 'version' swagger/ruj-api.yml | awk '{print $2}')"
echo $VERSION
BUILD="-b$(eval cat swagger/cmt/buildnumber.txt)"
echo $BUILD
COMMIT="-$(eval cat swagger/cmt/commitnumber.txt)"
echo $COMMIT
TAGVERSION="$VERSION$BUILD$COMMIT"
echo $TAGVERSION
IMAGES=` docker ps --filter "name=ruj-api-design:$TAGVERSION" -q`
if [ -n "$IMAGES" ]; then
    docker rm -f $IMAGES
fi
