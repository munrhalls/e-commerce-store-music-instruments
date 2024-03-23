#!/bin/bash

export IMAGE_TAG=$(git describe --tags --abbrev=0)
echo "Pushing image with tag: $IMAGE_TAG"

docker login
docker compose -f compose-deploy.yaml down
docker compose -f compose-deploy.yaml build --no-cache
docker compose -f compose-deploy.yaml push