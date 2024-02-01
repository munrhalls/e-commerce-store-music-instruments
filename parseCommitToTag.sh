#!/bin/bash

# Every commit should have the following format: FEATURE-<feature-name>-<size of change>
# This script's output should always translate that commit onto <FEATURE>-<feature-name>-<size>-version>
# sizes are: LARGE, MEDIUM, TINY and correspond to <x.0.0> / <0.x.0> / <0.0.x> respectively

# Fetch the latest commit message
latest_commit_message=$(git log -1 --pretty=%B)
echo "Latest COMMIT MESSAGE: $latest_commit_message"

# Extract feature name and size of change from the commit message
# The commit message format is expected to be: FEATURE-<feature-name>-<size of change>
feature_name=$(echo $latest_commit_message | cut -d '-' -f 2)
size_of_change=$(echo $latest_commit_message | cut -d '-' -f 3)

# Initialize version parts
major=0
minor=0
patch=0

# Determine the version increment based on the size of change
case "$size_of_change" in
  "LARGE")
    major=$((major + 1))
    ;;
  "MEDIUM")
    minor=$((minor + 1))
    ;;
  "TINY")
    patch=$((patch + 1))
    ;;
  *)
    echo "Unknown size of change: $size_of_change"
    exit 1
    ;;
esac

# Construct the tag
tag="FEATURE-${feature_name}-${major}.${minor}.${patch}"
echo $tag