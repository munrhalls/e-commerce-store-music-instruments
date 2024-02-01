#!/bin/bash

# Ensure associative array support is available
if [ "${BASH_VERSINFO[0]}" -lt 4 ]; then
    echo "Bash version 4 or later is required."
    exit 1
fi

# Filter commit messages that match the required format
commit_messages=($(git log --pretty=format:"%s" | grep -E '^FEATURE-.*-(LARGE|MEDIUM|TINY)$'))

# Exit if no matching commits found
if [ ${#commit_messages[@]} -eq 0 ]; then
    echo "No commits match the required format."
    exit 0
fi

# Extract feature name and size from the latest commit
latest_commit="${commit_messages[0]}"
feature_name=$(echo "$latest_commit" | cut -d '-' -f 2)
size=$(echo "$latest_commit" | cut -d '-' -f 3)

# Initialize version numbers
major=0
minor=0
patch=0

# Loop through all commits to find the highest version number for the feature
for commit in "${commit_messages[@]}"; do
    if [[ "$commit" == *"$feature_name"* ]]; then
        version=$(echo "$commit" | grep -oE '[0-9]+\.[0-9]+\.[0-9]+$')
        if [[ -n "$version" ]]; then
            IFS='.' read -r v_major v_minor v_patch <<< "$version"
            if (( v_major > major )) || (( v_major == major && v_minor > minor )) || (( v_major == major && v_minor == minor && v_patch >= patch )); then
                major=$v_major
                minor=$v_minor
                patch=$v_patch
            fi
        fi
    fi
done

# Increment the version based on the size
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

# Construct the new tag
new_tag="FEATURE-${feature_name}-${major}.${minor}.${patch}"
echo "$new_tag"


# previous WAY OF DOING IT:

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
