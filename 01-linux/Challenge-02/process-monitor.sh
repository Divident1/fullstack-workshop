#!/bin/bash
set -e


if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Usage: $0 <process_name> <check_interval_seconds>"
    exit 1
fi

PROCESS_NAME="$1"
INTERVAL="$2"

echo "Monitoring process '$PROCESS_NAME' every $INTERVAL seconds..."

while true; do
    TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

    if pgrep -x "$PROCESS_NAME" > /dev/null; then
        echo "[$TIMESTAMP] Process '$PROCESS_NAME' is running."
        sleep "$INTERVAL"
    else
        echo "[$TIMESTAMP] Alert: Process '$PROCESS_NAME' has stopped (or was not running)!"
        exit 0
    fi
done
