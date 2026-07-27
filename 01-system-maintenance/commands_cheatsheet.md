# Quick Reference — Disk, Processes, Logs & Alerts

Keep this open on your laptop during the practical. Linux commands on the left, Windows equivalent on the right.

## Disk Space

| Task | Linux / Mac | Windows (PowerShell) |
|---|---|---|
| Show space used on each drive | `df -h` | `Get-PSDrive -PSProvider FileSystem` |
| Show what's taking up space in a folder | `du -sh /var/log/*` | `Get-ChildItem -Recurse \| Sort-Object Length -Descending \| Select -First 10` |
| Find the single biggest file in a folder | `du -ah . \| sort -rh \| head -5` | Sort by size in File Explorer |

**Red flag:** treat 80% usage as a warning sign and 90%+ as urgent — don't wait until it hits 100%.

## Processes

| Task | Linux / Mac | Windows (PowerShell) |
|---|---|---|
| List all running processes | `ps aux` | `Get-Process` |
| Live view, updates automatically | `top` (or `htop` if installed) | Task Manager |
| Find the process ID of a named service | `pgrep nginx` or `ps aux \| grep nginx` | `Get-Process nginx` |
| Stop a process (graceful) | `kill <PID>` | `Stop-Process -Id <PID>` |
| Stop a process (force, last resort) | `kill -9 <PID>` | `Stop-Process -Id <PID> -Force` |

**Rule of thumb:** try a graceful stop/restart first. Only force-kill if it's truly stuck, and log why you did it.

## Reading & Searching Logs

| Task | Linux / Mac | Windows (PowerShell) |
|---|---|---|
| View the first/last lines of a file | `head -n 10 file.log` / `tail -n 10 file.log` | `Get-Content file.log -Head 10` / `-Tail 10` |
| Watch a log update live | `tail -f file.log` | `Get-Content file.log -Wait` |
| Search for a keyword | `grep ERROR file.log` | `Select-String ERROR file.log` |
| Count how many times something appears | `grep -c WARN file.log` | `(Select-String WARN file.log).Count` |
| System service logs (systemd) | `journalctl -u nginx` | Event Viewer → Windows Logs |

## Setting Up a Simple Alert

1. Write a small script that checks one thing (disk space, or whether a service is running) and logs a WARNING if something's wrong — see `check_disk_alert.sh` and `check_service_alert.sh` in this folder.
2. Test it by running it manually first: `bash check_disk_alert.sh`
3. Schedule it to run automatically with **cron**:
   ```
   crontab -e
   ```
   then add a line like:
   ```
   0 * * * * /path/to/check_disk_alert.sh
   ```
   (this example runs the script at the start of every hour)
4. Decide what "alert" means for your team — a log file someone checks each morning is a perfectly good starting point. Email or chat notifications can come later once the basics are working.

**Cron time format reminder:** `minute hour day month weekday`
Examples: `0 * * * *` = every hour · `*/5 * * * *` = every 5 minutes · `0 6 * * *` = every day at 6am
