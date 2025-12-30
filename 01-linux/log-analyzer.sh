#!/bin/bash
set -e

# Check if the log file path is provided as an argument
if [[ $# -eq 0 ]]; then
    echo "Usage: $0 <file>"
    exit 1
fi

file="$1"

# Verify if the provided file exists before proceeding
if [[ ! -f "$file" ]]; then
    echo "Error: File '$file' does not exist"
    exit 1
fi

echo "File exists, analyzing..."

# Count occurrences of different log levels (Error, Warning, Info)
countError=$(grep -ci "error" "$file")
countWarning=$(grep -ci "warning" "$file")
countInfo=$(grep -ci "info" "$file")

echo "Error count   : $countError"
echo "Warning count : $countWarning"
echo "Info count    : $countInfo"

# Extract and list unique IP addresses using regex
echo "IP Address through Regex:"
Ip_Only="[0-9]{1,3}(\.[0-9]{1,3}){3}"
IP_LIST=$(grep -oE "$Ip_Only" "$file" | sort | uniq)

echo "$IP_LIST"