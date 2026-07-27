# COSPPac Regional ICT Workshop - Practicals


This repo contains the hands-on materials for all five practical sessions in the workshop. It's set up to

## How to Start

1. Click the green **Code** button on this repo's GitHub page → **Codespaces** tab → **Create codespace on main**.
2. Wait about a minute for it to build (first time only) - this installs Python, pandas and matplotlib automatically.
3. You'll get a full VS Code environment in your browser, with a terminal at the bottom.
4. Open the folder for whichever practical you're doing.


> participant clicks **Use this template** to get their own copy
## Practicals

| Folder | Practical | What you'll use |
|---|---|---|
| `01-system-maintenance/` | Practical 4 - Maintenance Calendar & Troubleshooting Drill | Terminal (bash) |
| `02-data-formats-storage/` | Practical 6 - Open & Plot Wave Buoy Data | Terminal (Python) |
| `03-embedding-websites/` | Practical 8 - Website Embedding Exercise | Browser preview |
| `04-api-integration/` | Practical 7 - API Integration | Browser preview + terminal |
| `05-github-push/` | Practical 10 - Pushing Code to GitHub | Terminal (git + gh) |

Each folder has its own `Handout.docx` with the full step-by-step instructions - open it right here on
GitHub (it previews in the browser) or download it. The notes below are just the extra bits specific to
working inside a Codespace.

## Codespace Notes Per Practical

**01 - System Maintenance:** the core practical is just reading `sample_system_log.txt` in a text editor -
no terminal, no Codespace needed, Notepad on your own laptop works exactly as well. The handout has one
optional extra at the end, only for those using a Codespace: two look-only terminal commands, `df -h`
(disk space) and `top` (what's running). Nothing to type beyond the one command each, nothing to fix.

**02 - Data Formats:** Python, pandas and matplotlib are pre-installed. Run:
```
cd 02-data-formats-storage
python plot_wave_buoy.py
```
The chart won't pop up in a window (there's no display in a Codespace) - it saves to
`wave_height_plot.png` instead. Open that file in the VS Code file explorer to view it.

`view_stations_map.html` (the GeoJSON station map) works either way - just open it - but for the full
effect, serve it like the practicals below so it loads the real `sample_stations.geojson` file instead of
its built-in backup copy:
```
python3 -m http.server 8000
```

There's also a Map Preview extension pre-installed - right-click `sample_stations.geojson` in the file
explorer and choose **Preview Geo Data** to see it plotted on a map without opening the HTML page at all.

A few more format-specific extensions are pre-installed to make the raw files nicer to look at:
- **CSV** - open `sample_wave_buoy.csv` and it renders as a spreadsheet-style grid instead of plain text.
- **JSON Crack** - open `sample_forecast_snippet.json` or `sample_stations.geojson`, then use the JSON
  Crack panel to see it as an interactive graph instead of nested brackets.
- **XML** - open `sample_station_metadata.xml` for formatting, validation and folding.

**03 - Embedding & 04 - API Integration:** these need a live browser preview instead of double-clicking
the HTML file (there's no desktop to double-click on). From the terminal, in the relevant folder, run:
```
python3 -m http.server 8000
```
A "Open in Browser" popup will appear (or check the **Ports** tab at the bottom of VS Code) - click it to
preview the page. Edit the HTML file, save, and refresh that browser tab to see your change.

**05 - GitHub Push:** this is the one practical you can do *entirely* inside this same Codespace - `git`
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


