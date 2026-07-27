# API Reference — Free APIs You Can Use Today

| Source | What it provides | Access | Example URL |
|---|---|---|---|
| Open-Meteo | Hourly/daily weather forecasts for any Pacific lat/lon | Free / Open | `https://api.open-meteo.com/v1/forecast?latitude=-18.1&longitude=178.4&daily=precipitation_sum` |
| ERDDAP (NOAA) | Ocean and climate gridded data - SST, wave height, chlorophyll | Free / Open | `https://coastwatch.pfeg.noaa.gov/erddap/index.html` |
| COSPPac Tools | COSPPac databases and workflows | On request | Check with Bureau for endpoint URLs |
| WIS2.0 (WMO) | Global met data exchange - observations and forecasts | Free / Open | `https://wis2.wmo.int` |
| Pacific Data Hub | SPC data for the Pacific - indicators and environmental statistics | Free / Open | `https://pacificdata.org` |

## Anatomy of a Request

```
https://api.open-meteo.com/v1/forecast?latitude=-18.1&longitude=178.4&daily=precipitation_sum
```

| Part | Meaning |
|---|---|
| `https://api.open-meteo.com` | Base URL - the server address |
| `/v1/forecast` | Endpoint - which data you're requesting |
| `?latitude=...&longitude=...&daily=...` | Parameters - filter the response |

## Fetch in JavaScript

```js
fetch("https://api.open-meteo.com/v1/forecast" +
      "?latitude=-18.1&longitude=178.4" +
      "&daily=precipitation_sum")
  .then(response => response.json())
  .then(data => console.log(data));
```

Two concepts cover most of what you'll need: **fetch()** to make the request, and **JSON** to read the response.
