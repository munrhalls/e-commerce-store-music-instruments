#!/bin/sh
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
# echo "Checking if GENERATED_TAG satisfies the <feature>-<feature-name>-<size> format..."
# if [ -z "$GENERATED_TAG" ]; then
#     echo "Commit violates <feature>-<feature-name>-<size> format required for proper docker image tagging";
#     exit 1;
# fi

# - |
# echo "Using docker-compose to build the updated images in the repository..."
# docker-compose -f docker-compose.yaml build --no-cache || exit 1