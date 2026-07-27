<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live Sea Level Widget</title>
</head>
<body>
  <h1>Live Sea Level - SPC Ocean Observations</h1>
  <div id="sea-level-widget">Loading...</div>

  <script>
    // CHANGE this to another station ID, then refresh the page.
    // See api_reference.md for more station IDs (e.g. "upol", "mala").
    const stationId = "auasi"; // Samoa, Auasi - Tide Gauge

    fetch(`https://ocean-obs-api.spc.int/insitu/get_data/station/${stationId}?limit=1`)
      .then(response => response.json())
      .then(data => {
        const latest = data.data[0];
        const seaLevel = latest["sea_level (m)"];
        const time = latest["time"];
        document.getElementById("sea-level-widget").innerText =
          data.display_name + ": " + seaLevel + " m (at " + time + ")";
      })
      .catch(error => {
        document.getElementById("sea-level-widget").innerText = "Could not load sea level data.";
        console.error(error);
      });
  </script>
</body>
</html>
