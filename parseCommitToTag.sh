#!/bin/bash

# Get all commit messages that follow the pattern
commit_messages=$(git log --pretty=format:"%s" | grep -E '^FEATURE-.*-(LARGE|MEDIUM|TINY)$')

# Initialize the latest tag variable
latest_tag=""

# Loop through each commit message
while read -r message; do
    # Extract feature name and size of change
    feature_name=$(echo "$message" | cut -d '-' -f 2)
    size=$(echo "$message" | cut -d '-' -f 3)

    # Set initial version numbers
    major=0
    minor=0
    patch=0

    # If this is not the first occurrence of this feature, extract the current version from the latest tag
    if [[ -n "$latest_tag" ]]; then
        # Use a regular expression to extract version numbers
        if [[ $latest_tag =~ $feature_name-([0-9]+)\.([0-9]+)\.([0-9]+) ]]; then
            major=${BASH_REMATCH[1]}
            minor=${BASH_REMATCH[2]}
            patch=${BASH_REMATCH[3]}
        fi
    fi

    # Increment version numbers based on the size of the change
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
        *)
            echo "Invalid size: $size"
            exit 1
            ;;
    esac

    # Construct the tag for this commit
    latest_tag="FEATURE-${feature_name}-${major}.${minor}.${patch}"

done <<< "$commit_messages"

# Output the latest tag
echo "$latest_tag"








# #!/bin/bash

# # FORMAT for commits: <FEATURE>-<FEATURE-NAME>-<SIZE> | <SIZE> VALUES: LARGE|MEDIUM|TINY>

# # A. Get all commit messages that respect the format
# commit_messages=$(git log --pretty=format:"%s" | grep -E '^FEATURE-.*-(LARGE|MEDIUM|TINY)$')

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
