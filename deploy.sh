echo "Deploy script running"

docker info > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "Error: Docker daemon is not running."
    exit 1
fi

scp /root/sang-logium/.env root@$DROPLET_IP:/root/sang-logium/.env
ssh root@$DROPLET_IP "bash -c '\
echo \"GENERATED_TAG=$GENERATED_TAG\" > /root/sang-logium/.env && \

sed -e "s/\${MONGO_INITDB_ROOT_USERNAME}/$MONGO_INITDB_ROOT_USERNAME/g" \
    -e "s/\${MONGO_INITDB_ROOT_PASSWORD}/$MONGO_INITDB_ROOT_PASSWORD/g" \
    -e "s/\${MONGO_INITDB_DATABASE}/$MONGO_INITDB_DATABASE/g" \
    -e "s/\${MONGO_URI}/$MONGO_URI/g" \
    -e "s/\${DATA_SERVER_NODE_ENV}/$DATA_SERVER_NODE_ENV/g" \
    -e "s/\${DATA_SERVER_PORT}/$DATA_SERVER_PORT/g" \

scp /root/sang-logium/docker-compose.yaml root@$DROPLET_IP:/root/sang-logium/docker-compose.yaml
docker pull $DOCKER_HUB_USERNAME/sang-logium-frontend:$GENERATED_TAG || { echo \"Failed to pull frontend image\"; exit 1; } && \
docker pull $DOCKER_HUB_USERNAME/sang-logium-server:$GENERATED_TAG || { echo \"Failed to pull server image\"; exit 1; } && \
docker pull $DOCKER_HUB_USERNAME/sang-logium-database:$GENERATED_TAG || { echo \"Failed to pull database image\"; exit 1; } && \
docker-compose -f /root/sang-logium/docker-compose.yaml up -d || { echo \"Failed to start services with docker-compose\"; exit 1; } \
'"