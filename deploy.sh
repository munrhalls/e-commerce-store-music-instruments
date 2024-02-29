# echo "Deploy script running"
# test
# docker info > /dev/null 2>&1
# if [ $? -ne 0 ]; then
#     echo "Error: Docker daemon is not running."
#     exit 1
# fi

  ssh root@$46.101.117.145
  scp /root/sang-logium/docker-compose.yaml root@$46.101.117.145:/root/sang-logium/docker-compose.yaml

# ssh root@$46.101.117.145 << EOF
#   echo "Deploy script running..."
# EOF

#   export GENERATED_TAG=${GENERATED_TAG}
#   export MONGO_INITDB_ROOT_USERNAME=${MONGO_INITDB_ROOT_USERNAME}
#   export MONGO_INITDB_ROOT_PASSWORD=${MONGO_INITDB_ROOT_PASSWORD}
#   export MONGO_INITDB_DATABASE=${MONGO_INITDB_DATABASE}
#   export MONGO_URI=${MONGO_URI}
#   export DATA_SERVER_NODE_ENV=${DATA_SERVER_NODE_ENV}
#   export DATA_SERVER_PORT=${DATA_SERVER_PORT}
#   cd /root/sang-logium
#   docker-compose pull
#   docker-compose up -d