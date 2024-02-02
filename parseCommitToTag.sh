#!/bin/bash

# # FORMAT for commits: <FEATURE>-<FEATURE-NAME>-<SIZE> | <SIZE> VALUES: LARGE|MEDIUM|TINY>
# Fetch latest commit, get details. If not <FEATURE>-<FEATURE-NAME>-<SIZE> format, exit with null
latest_commit=$(git log --pretty=format:"%s" -1)
if [[ $latest_commit =~ ^FEATURE-.*-(LARGE|MEDIUM|TINY)$ ]]; then
    read latest_feature_name size <<< $(echo "$latest_commit" | awk -F '-' '{print $2, $3}')
else
    latest_feature_name=null
    size=null
    echo "null"
    exit 0
fi

# Get all commits in chronological order
commits=$(git log --pretty=format:"%s" | tac)

# Initialize version numbers
major=0; minor=0; patch=0

# Process each commit
while IFS= read -r commit; do
    if [[ $commit =~ ^FEATURE-.*-(LARGE|MEDIUM|TINY)$ ]]; then
        read feature_name size <<< $(echo "$commit" | awk -F '-' '{print $2, $3}')

        # If the size is LARGE, increment the major version and reset the minor and patch versions
        if [[ "$size" == "LARGE" ]]; then
            major=$((major + 1))
            minor=0
            patch=0
        # If the size is MEDIUM, increment the minor version and reset the patch version
        elif [[ "$size" == "MEDIUM" ]]; then
            minor=$((minor + 1))
            patch=0
        # If the size is TINY, increment the patch version
        elif [[ "$size" == "TINY" ]]; then
            patch=$((patch + 1))
        fi
    fi
done <<< "$commits"

# Output the latest tag with properly formatted version number
echo "FEATURE-${feature_name}-${major}.${minor}.${patch}"