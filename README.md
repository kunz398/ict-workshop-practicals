# COSPPac Regional ICT Workshop — Practicals

Melbourne, 24–28 August 2026

This repo contains the hands-on materials for all five practical sessions in the workshop. It's set up to
run entirely in **GitHub Codespaces** — a full coding environment in your browser, with Python, git and
GitHub's `gh` command-line tool already installed. You don't need to install anything on your own laptop.

## How to Start

1. Click the green **Code** button on this repo's GitHub page → **Codespaces** tab → **Create codespace on main**.
2. Wait about a minute for it to build (first time only) — this installs Python, pandas and matplotlib automatically.
3. You'll get a full VS Code environment in your browser, with a terminal at the bottom.
4. Open the folder for whichever practical you're doing.

> **Facilitators:** mark this repository as a **Template** (Settings → Template repository) so each
> participant clicks **Use this template** to get their own copy, instead of everyone editing the same repo
> at once.

## Practicals

| Folder | Practical | What you'll use |
|---|---|---|
| `01-system-maintenance/` | Practical 4 — Maintenance Calendar & Troubleshooting Drill | Terminal (bash) |
| `02-data-formats-storage/` | Practical 6 — Open & Plot Wave Buoy Data | Terminal (Python) |
| `03-embedding-websites/` | Practical 8 — Website Embedding Exercise | Browser preview |
| `04-api-integration/` | Practical 7 — API Integration | Browser preview + terminal |
| `05-github-push/` | Practical 10 — Pushing Code to GitHub | Terminal (git + gh) |

Each folder has its own `Handout.docx` with the full step-by-step instructions — open it right here on
GitHub (it previews in the browser) or download it. The notes below are just the extra bits specific to
working inside a Codespace.

## Codespace Notes Per Practical

**01 — System Maintenance:** everything runs in the terminal as-is. `df`, `du`, `ps`, `grep`, `tail` all
work normally. `cron` itself isn't running inside the container, so for the alert-scheduling step, just
write out the `crontab -e` line as instructed — you don't need it to actually fire.

**02 — Data Formats:** Python, pandas and matplotlib are pre-installed. Run:
```
cd 02-data-formats-storage
python plot_wave_buoy.py
```
The chart won't pop up in a window (there's no display in a Codespace) — it saves to
`wave_height_plot.png` instead. Open that file in the VS Code file explorer to view it.

**03 — Embedding & 04 — API Integration:** these need a live browser preview instead of double-clicking
the HTML file (there's no desktop to double-click on). From the terminal, in the relevant folder, run:
```
python3 -m http.server 8000
```
A "Open in Browser" popup will appear (or check the **Ports** tab at the bottom of VS Code) — click it to
preview the page. Edit the HTML file, save, and refresh that browser tab to see your change.

**05 — GitHub Push:** this is the one practical you can do *entirely* inside this same Codespace — `git`
and `gh` (GitHub CLI) are both pre-installed and `gh` is already logged in as you. Follow the handout as
written; when it says "on github.com, click + → New repository," you can instead just run:
```
gh repo create nmhs-ict-practice --public --add-readme
git clone https://github.com/YOUR-USERNAME/nmhs-ict-practice.git
```
from the terminal and continue from there.

## Facilitator Setup

To publish this repo:
```
cd cosppac-ict-workshop-practicals
git init
git add .
git commit -m "Workshop practicals"
gh repo create cosppac-ict-workshop-practicals --public --source=. --push
```
(or create the empty repo on github.com first, then `git remote add origin <url>` and `git push -u origin main`)

Then go to **Settings → Template repository** and tick the box, so participants use **Use this template**
instead of forking or cloning directly.
