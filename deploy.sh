ssh root@$DROPLET_IP "bash -c '\
echo \"GENERATED_TAG=$GENERATED_TAG\" > /root/sang-logium/.env && \
scp /root/sang-logium/.env root@$DROPLET_IP:/root/sang-logium/.env

sed -e "s/\${MONGO_INITDB_ROOT_USERNAME}/$MONGO_INITDB_ROOT_USERNAME/g" docker-compose.yaml.template > /root/sang-logium/docker-compose.yaml

sed -e "s/\${MONGO_INITDB_ROOT_PASSWORD}/$MONGO_INITDB_ROOT_PASSWORD/g" docker-compose.yaml.template > /root/sang-logium/docker-compose.yaml

sed -e "s/\${MONGO_INITDB_DATABASE}/$MONGO_INITDB_DATABASE/g" docker-compose.yaml.template > /root/sang-logium/docker-compose.yaml

sed -e "s/\${MONGO_URI}/$MONGO_URI/g" docker-compose.yaml.template > /root/sang-logium/docker-compose.yaml

sed -e "s/\${DATA_SERVER_NODE_ENV}/$DATA_SERVER_NODE_ENV/g" docker-compose.yaml.template > /root/sang-logium/docker-compose.yaml

sed -e "s/\${DATA_SERVER_PORT}/$DATA_SERVER_PORT/g" docker-compose.yaml.template > /root/sang-logium/docker-compose.yaml

docker pull $DOCKER_HUB_USERNAME/sang-logium-frontend:$GENERATED_TAG || { echo \"Failed to pull frontend image\"; exit 1; } && \
docker pull $DOCKER_HUB_USERNAME/sang-logium-server:$GENERATED_TAG || { echo \"Failed to pull server image\"; exit 1; } && \
docker pull $DOCKER_HUB_USERNAME/sang-logium-database:$GENERATED_TAG || { echo \"Failed to pull database image\"; exit 1; } && \
docker-compose -f /root/sang-logium/docker-compose.yaml up -d || { echo \"Failed to start services with docker-compose\"; exit 1; } \
'"