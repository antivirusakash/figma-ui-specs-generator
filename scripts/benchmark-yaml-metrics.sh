#!/usr/bin/env bash
# Benchmark YAML Metrics — extracts the embedded YAML payload from a spec report
# and computes size metrics for tracking schema optimization progress.
#
# Usage: bash scripts/benchmark-yaml-metrics.sh benchmark/spec-report.md

set -euo pipefail

FILE="${1:?Usage: $0 <spec-report.md>}"

if [ ! -f "$FILE" ]; then
  echo "Error: File not found: $FILE" >&2
  exit 1
fi

# Extract YAML block (from ```yaml to ```)
YAML_BLOCK=$(awk '/^```yaml$/,/^```$/' "$FILE" | sed '1d;$d')

if [ -z "$YAML_BLOCK" ]; then
  echo "Error: No YAML block found in $FILE" >&2
  exit 1
fi

TOTAL_CHARS=$(echo "$YAML_BLOCK" | wc -c | tr -d ' ')
LINE_COUNT=$(echo "$YAML_BLOCK" | wc -l | tr -d ' ')
CHUNK_COUNT=$(echo "$YAML_BLOCK" | grep -c 'chunk_id:' || true)
ANATOMY_ITEMS=$(echo "$YAML_BLOCK" | grep -c '- node_id:' || true)
TEXT_INDEX_ITEMS=$(echo "$YAML_BLOCK" | awk '/^text_index:/,/^chunks:/' | grep -c '- id:' || true)

# path_key chars total
PATH_KEY_CHARS=$(echo "$YAML_BLOCK" | grep 'path_key:' | awk -F': ' '{s+=length($2)} END {print s+0}')

# Report file metrics
REPORT_CHARS=$(wc -c < "$FILE" | tr -d ' ')
REPORT_LINES=$(wc -l < "$FILE" | tr -d ' ')

# Schema version
SCHEMA=$(echo "$YAML_BLOCK" | grep '^schema:' | head -1 | awk -F': ' '{print $2}')

cat <<EOF
{
  "file": "$(basename "$FILE")",
  "schema": "$SCHEMA",
  "report": {
    "size_chars": $REPORT_CHARS,
    "line_count": $REPORT_LINES
  },
  "payload": {
    "size_chars": $TOTAL_CHARS,
    "line_count": $LINE_COUNT,
    "chunks_total": $CHUNK_COUNT,
    "anatomy_items": $ANATOMY_ITEMS,
    "text_index_items": $TEXT_INDEX_ITEMS,
    "path_key_chars_total": $PATH_KEY_CHARS
  }
}
EOF
