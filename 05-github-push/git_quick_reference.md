# Quick Reference — Commands You Used

Keep this open on your phone or laptop during and after the workshop.

```
# 1. Clone a repo to your computer
git clone https://github.com/YOUR-USERNAME/REPO-NAME.git

# 2. Go into the folder
cd REPO-NAME

# 3. Check what's changed
git status

# 4. Stage a file (mark it to be saved)
git add filename.txt
git add .              # stages ALL changed files - use with care

# 5. Commit (save a snapshot with a message)
git commit -m "Add Samoa tide gauge data"

# 6. Push (upload your commits to GitHub)
git push

# 7. Pull (download the latest changes before you start work)
git pull
```

**Tip:** `git add .` (with a dot) stages every changed file. Use `git add filename.txt` to stage just one.

## The Basic Workflow

```
Working Directory  →  Staging Area  →  Local Repo  →  GitHub (Remote)
      (edit)          git add          git commit       git push
```

Always `git pull` before you start work, to bring down anyone else's changes first.

## Good Commit Messages

| Bad ✗ | Good ✓ |
|---|---|
| "stuff" | "Fix rainfall unit on homepage" |
| "asdf" | "Add Samoa tide gauge data" |
| "fix" | "Update contact page phone number" |
| "changes" | "Remove broken wave buoy chart" |
| "update 3" | "First version of cyclone warning widget" |

A good commit message lets a future teammate (or future you) understand what changed without opening the file.
