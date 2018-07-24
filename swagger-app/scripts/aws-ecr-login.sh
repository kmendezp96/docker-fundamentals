#!/bin/bash
docker logout
eval $(aws ecr get-login --no-include-email --region $AWS_DEFAULT_REGION --registry-ids $AWS_ECR_ID)
