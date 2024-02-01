#!/bin/bash

# Fetch latest commit message
latest_commit_message=$(git log -1 --pretty=%B)
echo "Latest COMMIT MESSAGE: $latest_commit_message"

# Initialize version parts
large=0
medium=0
tiny=0

# Check if the commit message contains specific keywords and increment version parts
if [[ "$latest_commit_message" == *"LARGE:"* ]]; then
    large=$((large + 1))
elif [[ "$latest_commit_message" == "MEDIUM:"* ]]; then
    medium=$((medium + 1))
elif [[ "$latest_commit_message" == "TINY:"* ]]; then
    tiny=$((tiny + 1))
fi

# Construct the tag using 'FEATURE' as a placeholder and the version parts
# Note: Implement your logic here to extract an actual feature name from the commit message
echo "FEATURE-${large}.${medium}.${tiny}"
