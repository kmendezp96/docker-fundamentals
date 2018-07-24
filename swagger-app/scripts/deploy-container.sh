#!/bin/bash
VERSION="v.$(eval grep 'version' swagger/ruj-api.yml | awk '{print $2}')"
echo $VERSION
BUILD="-b$(eval cat swagger/cmt/buildnumber.txt)"
echo $BUILD
COMMIT="-c$(eval cat swagger/cmt/commitnumber.txt)"
echo $COMMIT
TAGVERSION="$VERSION$BUILD$COMMIT"
echo $TAGVERSION

IMAGES=`docker images "ruj-api-design*" -q`
if [ -n "$IMAGES" ]; then
    docker rmi -f $IMAGES
fi

docker rm -f ruj-api-design
docker pull 329925270288.dkr.ecr.us-east-1.amazonaws.com/ruj-api-design:$TAGVERSION
docker run -d --name ruj-api-design -p 8080:8080 --restart=unless-stopped 329925270288.dkr.ecr.us-east-1.amazonaws.com/ruj-api-design:$TAGVERSION
