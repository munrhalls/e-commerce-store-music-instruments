#!/bin/bash

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

# Initialize version numbers
major=0; minor=0; patch=0

# Process only if a valid commit was found
if [ ! -z "$latest_feature_name" ]; then
    # Count the number of commits for each size
    major=$(git log --pretty=format:"%s" | grep -E "^FEATURE-$latest_feature_name-LARGE" | wc -l)
    minor=$(git log --pretty=format:"%s" | grep -E "^FEATURE-$latest_feature_name-MEDIUM" | wc -l)
    patch=$(git log --pretty=format:"%s" | grep -E "^FEATURE-$latest_feature_name-TINY" | wc -l)
fi

# Output the latest tag with properly formatted version number
echo "FEATURE-${latest_feature_name}-${major}.${minor}.${patch}"



# #!/bin/bash

# # FORMAT for commits: <FEATURE>-<FEATURE-NAME>-<SIZE> | <SIZE> VALUES: LARGE|MEDIUM|TINY>

# # A. Get all commit messages that respect the format
# commit_messages=$(git log --pretty=format:"%s" | grep -E '^FEATURE-.*-(LARGE|MEDIUM|TINY)$')

# latest_commit="${commit_messages[0]}"
# latest_feature_name=$(echo "$latest_commit" | cut -d '-' -f 2)

# # B & C. Process each commit message
# declare -A feature_versions

# while read -r message; do
#     feature_name=$(echo "$message" | cut -d '-' -f 2)
#     size=$(echo "$message" | cut -d '-' -f 3)

#     # Initialize feature version if it does not exist
#     if [[ -z ${feature_versions[$feature_name]} ]]; then
#         feature_versions[$feature_name]="1.0.0"
#     else
#         # Extract the current version parts
#         IFS='.' read -r major minor patch <<< "${feature_versions[$feature_name]}"
#         case "$size" in
#             LARGE)
#                 major=$((major + 1))
#                 minor=0
#                 patch=0
#                 ;;
#             MEDIUM)
#                 minor=$((minor + 1))
#                 patch=0
#                 ;;
#             TINY)
#                 patch=$((patch + 1))
#                 ;;
#         esac
#         # Update the version
#         feature_versions[$feature_name]="${major}.${minor}.${patch}"
#     fi
# done <<< "$commit_messages"

# # Output the tags for each feature
# for feature in "${!feature_versions[@]}"; do
#     echo "FEATURE-${feature}-${feature_versions[$feature]}"
# done
