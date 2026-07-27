#!/bin/bash
#
# check_service_alert.sh
#
# Simple "is it still running?" alert for a training/practical environment.
# Checks whether a named process/service is running and writes a WARNING
# line to alert.log if it is NOT found.
#
# Usage:
#   bash check_service_alert.sh nginx
#   (if you don't pass a name, it checks "nginx" by default)
#
# To run automatically every 5 minutes with cron:
#   crontab -e
#   then add this line (edit the path to match your server):
#   */5 * * * * /path/to/check_service_alert.sh nginx

SERVICE="${1:-nginx}"
LOGFILE="$(dirname "$0")/alert.log"

if pgrep -x "$SERVICE" > /dev/null; then
    echo "$(date '+%Y-%m-%d %H:%M:%S') OK: $SERVICE is running" >> "$LOGFILE"
    echo "OK: $SERVICE is running."
else
    echo "$(date '+%Y-%m-%d %H:%M:%S') WARNING: $SERVICE is NOT running" >> "$LOGFILE"
    echo "ALERT: $SERVICE is not running!"
    # In a real deployment, this is where you'd try an automatic restart
    # (e.g. systemctl restart "$SERVICE") and/or notify someone.
fi
