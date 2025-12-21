#!/opt/homebrew/bin/bash
if [ $# -eq 0 ]; then
    echo "Error: Please provide a log file path."
    echo "Usage: $0 <path-to-log-file>"
    exit 1
fi

LOG_FILE="$1"
if [ ! -f "$LOG_FILE" ]; then
    echo "Error: File '$LOG_FILE' not found."
    exit 1
fi
TOTAL_LINES=$(wc -l < "$LOG_FILE")
COUNT_INFO=$(grep -c "INFO" "$LOG_FILE")
COUNT_WARNING=$(grep -c "WARNING" "$LOG_FILE")
COUNT_ERROR=$(grep -c "ERROR" "$LOG_FILE")
echo "File: $LOG_FILE"
echo "Total Lines: $TOTAL_LINES"
echo "-----------------------------------------"
echo "INFO:    $COUNT_INFO"
echo "WARNING: $COUNT_WARNING"
echo "ERROR:   $COUNT_ERROR"
echo "-----------------------------------------"
echo "Unique IP Addresses Found:"
grep -oE "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}" "$LOG_FILE" | sort | uniq | sed 's/^/  - /'