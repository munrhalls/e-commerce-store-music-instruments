#!/bin/bash

# Fetch the latest commit that follows the format and extract details
read latest_feature_name size <<< $(git log --pretty=format:"%s" -1 | grep -E '^FEATURE-.*-(LARGE|MEDIUM|TINY)$' | awk -F '-' '{print $2, $3}')

# Initialize version numbers
major=0; minor=0; patch=0

# Process only if a valid commit was found
if [ ! -z "$latest_feature_name" ]; then
    # Extract the highest version number for the feature from previous commits
    read major minor patch <<< $(git log --pretty=format:"%s" | grep -E "^FEATURE-$latest_feature_name-" | grep -oE '[0-9]+\.[0-9]+\.[0-9]+$' | sort -V | tail -n1 | awk -F '.' '{print $1, $2, $3}')

    # Increment version based on the size
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
fi

# Output the latest tag
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
