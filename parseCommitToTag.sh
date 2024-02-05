#!/bin/bash
# test 2
#1. VALIDATE COMMIT MESSAGE

# FORMAT for commits:
# <feature>-<feature-name>-<size> | <size> VALUES: large|medium|tiny>

# Fetch latest commit, get details. If not <feature>-<feature-name>-<size> format, exit with null
latest_commit=$(git log --pretty=format:"%s" -1)

# Check if the commit message starts with "feature-"
if [[ $latest_commit != feature-* ]]; then
    echo "null"
    exit 0
fi

# Split the commit message at the hyphens into parts
IFS='-' read -ra parts <<< "$latest_commit"

# Check if there are exactly three parts
if [ ${#parts[@]} -ne 3 ]; then
    echo "null"
    exit 0
fi

# Check if the second part (feature_name) is empty or contains a hyphen
if [[ -z "${parts[1]}" || "${parts[1]}" == *-* ]]; then
    echo "null"
    exit 0
fi

# Check if the third part (size) is not one of "large", "medium", or "tiny"
if [[ "${parts[2]}" != "large" && "${parts[2]}" != "medium" && "${parts[2]}" != "tiny" ]]; then
    echo "null"
    exit 0
fi

# If all checks pass, extract the feature name and size
latest_feature_name=${parts[1]}
size=${parts[2]}



#2. GENERATE TAG FOR DOCKER IMAGE BASED ON COMMIT MESSAGE

# Get all commits in chronological order
commits=$(git log --pretty=format:"%s" | tac)

# Initialize version numbers
major=0; minor=0; patch=0

# Process each commit
while IFS= read -r commit; do
    if [[ $commit =~ ^feature-.*-(large|medium|tiny)$ ]]; then
        read feature_name size <<< $(echo "$commit" | awk -F '-' '{print $2, $3}')

        # Sanitize latest_feature_name for Docker tag
        feature_name=$(echo "$latest_feature_name" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9_.-]/-/g')

        # If the size is large, increment the major version and reset the minor and patch versions
        if [[ "$size" == "large" ]]; then
            major=$((major + 1))
            minor=0
            patch=0
        # If the size is medium, increment the minor version and reset the patch version
        elif [[ "$size" == "medium" ]]; then
            minor=$((minor + 1))
            patch=0
        # If the size is tiny, increment the patch version
        elif [[ "$size" == "tiny" ]]; then
            patch=$((patch + 1))
        fi
    fi
done <<< "$commits"

# Output the latest tag with properly formatted version number
echo "feature-${feature_name}-${major}.${minor}.${patch}"