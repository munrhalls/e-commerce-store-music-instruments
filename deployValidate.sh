    # - |
    # echo "Checking for tag.txt file..."
    # if [ ! -f "tag.txt" ] || [ ! -s "tag.txt" ]; then
    #     echo "Error: tag.txt file is missing or empty"
    #     exit 1
    # fi

    # - |
    # echo "Reading GENERATED_TAG from tag.txt..."
    # export GENERATED_TAG=$(cat tag.txt) || exit 1

    # - |
    #     if [ -z "$GENERATED_TAG" ]; then
    #     echo "Error: Generated tag is empty.";
    #     exit 1;
    #     else
    #     echo "Tag extracted: $GENERATED_TAG";
    #     fi || exit 1
    #     echo "Tag extracted: $GENERATED_TAG"

    # - |
    # echo "Checking if GENERATED_TAG satisfies the <feature>-<feature-name>-<size> format..."
    # if [ -z "$GENERATED_TAG" ]; then
    #     echo "Commit violates <feature>-<feature-name>-<size> format required for proper docker image tagging";
    #     exit 1;
    # fi

    - |
    echo "Using docker-compose to build the updated images in the repository..."
    docker-compose -f docker-compose.yaml build --no-cache || exit 1

    - |
        echo DOCKER_HUB_USERNAME: $DOCKER_HUB_USERNAME
        echo GENERATED_TAG: $GENERATED_TAG
        echo "Pushing the built images with the generated tag: $GENERATED_TAG"


    - |
    if docker push $DOCKER_HUB_USERNAME/sang-logium-frontend:$GENERATED_TAG; then
        echo "Frontend Image successfully pushed to DockerHub";
    else
        echo "Failed to push image to DockerHub";
        exit 1;
    fi

    - |
    if docker push $DOCKER_HUB_USERNAME/sang-logium-server:$GENERATED_TAG; then
        echo "Server Image successfully pushed to DockerHub";
    else
        echo "Failed to push image to DockerHub";
        exit 1;
    fi


    - |
    if docker push $DOCKER_HUB_USERNAME/sang-logium-database:$GENERATED_TAG; then
        echo "Database Image successfully pushed to DockerHub";
    else
        echo "Failed to push image to DockerHub";
        exit 1;
    fi