#!/bin/bash
#
# check_disk_alert.sh
#
# Simple disk space alert for a training/practical environment.
# Checks how full the current partition is and writes a WARNING line
# to alert.log if usage is at or above the threshold.
#
# Usage:
#   bash check_disk_alert.sh
#
# To run automatically every hour with cron:
#   crontab -e
#   then add this line (edit the path to match your server):
#   0 * * * * /path/to/check_disk_alert.sh

THRESHOLD=80
LOGFILE="$(dirname "$0")/alert.log"

# Get the used-percentage of the partition this script is running from
USAGE=$(df -h . | awk 'NR==2 {print $5}' | tr -d '%')

if [ "$USAGE" -ge "$THRESHOLD" ]; then
    echo "$(date '+%Y-%m-%d %H:%M:%S') WARNING: Disk usage at ${USAGE}% (threshold ${THRESHOLD}%)" >> "$LOGFILE"
    echo "ALERT: Disk usage is at ${USAGE}%, above the ${THRESHOLD}% threshold."
    # In a real deployment, this is where you'd send an email, Slack
    # message or SMS instead of (or as well as) writing to a log file.
else
    echo "$(date '+%Y-%m-%d %H:%M:%S') OK: Disk usage at ${USAGE}% (threshold ${THRESHOLD}%)" >> "$LOGFILE"
    echo "OK: Disk usage is at ${USAGE}%, below the ${THRESHOLD}% threshold."
fi
