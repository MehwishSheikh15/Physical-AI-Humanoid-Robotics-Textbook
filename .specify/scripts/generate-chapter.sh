#!/usr/bin/env bash

# generate-chapter.sh
#
# Generates a new chapter Markdown file from the template, populating frontmatter.
#
# Usage:
#   ./generate-chapter.sh <module_path> <chapter_number> <chapter_title> <sidebar_label> <week_number> <difficulty>
#
# Example:
#   ./generate-chapter.sh "parts/part-1-foundations/module-01-introduction-to-physical-ai" 1 "Overview of Introduction" "Chapter 1: Overview" 1 "beginner"
#

set -euo pipefail

MODULE_PATH="$1"
CHAPTER_NUMBER="$2"
CHAPTER_TITLE="$3"
SIDEBAR_LABEL="$4"
WEEK_NUMBER="$5"
DIFFICULTY="$6"

if [[ -z "$MODULE_PATH" || -z "$CHAPTER_NUMBER" || -z "$CHAPTER_TITLE" || -z "$SIDEBAR_LABEL" || -z "$WEEK_NUMBER" || -z "$DIFFICULTY" ]]; then
  echo "Usage: $0 <module_path> <chapter_number> <chapter_title> <sidebar_label> <week_number> <difficulty>"
  exit 1
fi

TEMPLATE_FILE=".specify/templates/chapter/chapter-template.md"
OUTPUT_DIR="ai-robotics-book/docs/$MODULE_PATH"
OUTPUT_FILE="$OUTPUT_DIR/chapter_$CHAPTER_NUMBER.md"

if [[ ! -f "$TEMPLATE_FILE" ]]; then
  echo "Error: Chapter template file not found at $TEMPLATE_FILE"
  exit 1
fi

if [[ ! -d "$OUTPUT_DIR" ]]; then
  echo "Error: Module path directory not found: $OUTPUT_DIR"
  exit 1
fi

cp "$TEMPLATE_FILE" "$OUTPUT_FILE"

# Replace placeholders in the copied template
# Use a temporary file for sed on macOS/BSD compatible systems, then move it.
# For GNU sed (Linux), -i without argument is fine.
# PowerShell/Windows might need a different approach or explicit gsed install.
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS (BSD sed)
  sed -i '' "s/week:/week: $WEEK_NUMBER/" "$OUTPUT_FILE"
  sed -i '' "s/module: \"\"/module: \"$(basename "$MODULE_PATH")\"/" "$OUTPUT_FILE"
  sed -i '' "s/title: \"Chapter Title\"/title: \"$CHAPTER_TITLE\"/" "$OUTPUT_FILE"
  sed -i '' "s/sidebar_label: \"Chapter Title\"/sidebar_label: \"$SIDEBAR_LABEL\"/" "$OUTPUT_FILE"
  sed -i '' "s/difficulty: \"\"/difficulty: \"$DIFFICULTY\"/" "$OUTPUT_FILE"
  sed -i '' "s/{{ CHAPTER_TITLE }}/$CHAPTER_TITLE/" "$OUTPUT_FILE"
else
  # Linux (GNU sed) or other systems where -i works directly
  sed -i "s/week:/week: $WEEK_NUMBER/" "$OUTPUT_FILE"
  sed -i "s/module: \"\"/module: \"$(basename "$MODULE_PATH")\"/" "$OUTPUT_FILE"
  sed -i "s/title: \"Chapter Title\"/title: \"$CHAPTER_TITLE\"/" "$OUTPUT_FILE"
  sed -i "s/sidebar_label: \"Chapter Title\"/sidebar_label: \"$SIDEBAR_LABEL\"/" "$OUTPUT_FILE"
  sed -i "s/difficulty: \"\"/difficulty: \"$DIFFICULTY\"/" "$OUTPUT_FILE"
  sed -i "s/{{ CHAPTER_TITLE }}/$CHAPTER_TITLE/" "$OUTPUT_FILE"
fi

# Placeholder for learning_outcomes, prerequisites, assessment_type, capstone_component
# These will remain empty in the generated file, to be filled manually by the author.
# Need to escape newlines for sed
sed -i "/learning_outcomes:/a\  - " "$OUTPUT_FILE"
sed -i "/prerequisites:/a\  - " "$OUTPUT_FILE"
sed -i "/assessment_type:/a\  - " "$OUTPUT_FILE"
sed -i "/capstone_component:/a\  - " "$OUTPUT_FILE"


echo "Generated chapter: $OUTPUT_FILE"
