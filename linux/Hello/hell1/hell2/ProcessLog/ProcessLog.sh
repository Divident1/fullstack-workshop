#!/opt/homebrew/bin/bash

if [[ $# -eq 0 ]]; then
    echo "Usage: $0 <file>"
fi
file="$1"

countInfo=0
countWarning=0
countError=0

if [[ ! -f "$file" ]]; then
    echo "File does not exist"
    exit 1
fi

echo "File exists"
wc -l "$file"

countError=$(grep -ci "error" "$file")
countWarning=$(grep -ci "warning" "$file")
countInfo=$(grep -ci "info" "$file")

echo "Error count   : $countError"
echo "Warning count : $countWarning"
echo "Info count    : $countInfo"

echo "IP Address through Regex"
Ip_Only="[0-9]{1,3}(\.[0-9]{1,3}){3}"
IP_LIST=$(grep -oE "$Ip_Only" "$file" | sort | uniq)

echo "$IP_LIST"