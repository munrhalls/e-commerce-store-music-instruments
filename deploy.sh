#!/bin/bash
export IMAGE_TAG=$(git describe --tags --abbrev=0)
sed -i '/^IMAGE_TAG=/s/=.*/='$IMAGE_TAG'/' .env

# source .env
# echo "username: $DOCKER_HUB_USERNAME and token: $DOCKER_HUB_ACCESS_TOKEN"
# echo "Local PC: Pushing images to dockerhub with tag: $IMAGE_TAG"
# docker compose -f compose-deploy.yaml down
# docker compose -f compose-deploy.yaml build
# docker compose -f compose-deploy.yaml push

# scp .env root@$DROPLET_IP:/root/sang-logium/.env
# scp ./compose-prod.yaml root@$DROPLET_IP:/root/sang-logium/compose-prod.yaml

# echo "Droplet PC: Pulling images with tag: $IMAGE_TAG"
# ssh root@$DROPLET_IP << 'EOF'
# export $(cat /root/sang-logium/.env | xargs)
# docker login --username $DOCKER_HUB_USERNAME --password $DOCKER_ACCESS_TOKEN
# cd /root/sang-logium
# docker compose -f compose-prod.yaml down
# docker compose -f compose-prod.yaml rm -f
# docker image prune -a -f
# docker compose -f compose-prod.yaml pull
# docker compose -f compose-prod.yaml up -d --build
# EOF