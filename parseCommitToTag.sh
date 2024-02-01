#!/bin/bash

# FORMAT for commits: <FEATURE>-<FEATURE-NAME>-<SIZE> | <SIZE> VALUES: LARGE|MEDIUM|TINY>

# A. Get all commit messages that respect the format
commit_messages=$(git log --pretty=format:"%s" | grep -E '^FEATURE-.*-(LARGE|MEDIUM|TINY)$')

# B & C. Process each commit message
declare -A feature_versions

while read -r message; do
    feature_name=$(echo "$message" | cut -d '-' -f 2)
    size=$(echo "$message" | cut -d '-' -f 3)

    # Initialize feature version if it does not exist
    if [[ -z ${feature_versions[$feature_name]} ]]; then
        feature_versions[$feature_name]="1.0.0"
    else
        # Extract the current version parts
        IFS='.' read -r major minor patch <<< "${feature_versions[$feature_name]}"
        case "$size" in
            LARGE)
                major=$((major + 1))
                minor=0
                patch=0
                ;;
            MEDIUM)
                minor=$((minor + 1))
                patch=0
                ;;
            TINY)
                patch=$((patch + 1))
                ;;
        esac
        # Update the version
        feature_versions[$feature_name]="${major}.${minor}.${patch}"
    fi
done <<< "$commit_messages"

# Output the tags for each feature
for feature in "${!feature_versions[@]}"; do
    echo "FEATURE-${feature}-${feature_versions[$feature]}"
done
