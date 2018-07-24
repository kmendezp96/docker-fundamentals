#!/bin/bash
VERSION="v.$(eval grep 'version' ./ruj-api.yml | awk '{print $2}')"
echo $VERSION
BUILD="-b$BUILD_NUMBER"
echo $BUILD
COMMIT="-c$(eval cat cmt/commitnumber.txt)"
echo $COMMIT
TAGVERSION="$VERSION$BUILD$COMMIT"
echo $TAGVERSION
LASTVERSION="$VERSION"-b"$((BUILD_NUMBER-1))"
echo $LASTVERSION

docker images ruj-api-design | awk 'NR==2{print $1}'
IMAGENAME=`docker images ruj-api-design | awk 'NR==2{print $1}'`
docker tag ruj-api-design:latest 329925270288.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/ruj-api-design:$TAGVERSION
docker push 329925270288.dkr.ecr.us-east-1.amazonaws.com/ruj-api-design:$TAGVERSION
docker rmi -f ruj-api-design
docker rmi 329925270288.dkr.ecr.us-east-1.amazonaws.com/ruj-api-design:$TAGVERSION
