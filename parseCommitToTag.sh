#!/bin/bash

# # FORMAT for commits: <FEATURE>-<FEATURE-NAME>-<SIZE> | <SIZE> VALUES: LARGE|MEDIUM|TINY>
latest_commit=$(git log --pretty=format:"%s" -1)
if [[ $latest_commit =~ ^FEATURE-.*-(LARGE|MEDIUM|TINY)$ ]]; then
    read latest_feature_name size <<< $(echo "$latest_commit" | awk -F '-' '{print $2, $3}')
else
    latest_feature_name=null
    size=null
    echo "null"
    exit 0
fi

# Initialize version numbers
major=0; minor=0; patch=0

# Process only if a valid commit was found
if [ ! -z "$latest_feature_name" ]; then
    # Count the number of commits for each size
    major=$(git log --pretty=format:"%s" | grep -E "^FEATURE-$latest_feature_name-LARGE" | wc -l)
    minor=$(git log --pretty=format:"%s" | grep -E "^FEATURE-$latest_feature_name-MEDIUM" | wc -l)
    patch=$(git log --pretty=format:"%s" | grep -E "^FEATURE-$latest_feature_name-TINY" | wc -l)

    # If a larger version number has been incremented, reset the smaller ones
    if [ "$major" -gt 0 ]; then
        minor=0
        patch=0
    elif [ "$minor" -gt 0 ]; then
        patch=0
    fi
fi

# Output the latest tag with properly formatted version number
echo "FEATURE-${latest_feature_name}-${major}.${minor}.${patch}"