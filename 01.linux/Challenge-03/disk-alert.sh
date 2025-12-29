#!/bin/bash

THRESHOLD=${1:-90}
EXIT_CODE=0
df -Ph | grep '^/dev/' | awk '{print $1, $5}' | while read fs usage; do
    usage_num=${usage%\%}
    
    if [[ "$usage_num" =~ ^[0-9]+$ ]]; then
        if [ "$usage_num" -gt "$THRESHOLD" ]; then
            echo "WARNING: $fs is at ${usage_num}% (threshold: ${THRESHOLD}%)"
            touch .threshold_exceeded
        else
            echo "OK: $fs is at ${usage_num}%"
        fi
    fi
done

if [ -f .threshold_exceeded ]; then
    rm .threshold_exceeded
    exit 1
else
    exit 0
fi
