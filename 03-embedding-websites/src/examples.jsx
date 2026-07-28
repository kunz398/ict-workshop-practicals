// Three ways to embed a product on your training page.
// Copy the ONE you want into App.jsx, then edit it there for your own country
// (change the image link, or the station ID / coordinates).

import { useState, useEffect } from 'react'

// Option 1: Static Image
export function ProductImage() {
  return (
    <div>
      <img src="https://via.placeholder.com/300x120?text=Forecast+Map"
           alt="Weekly rainfall forecast map"
           style={{ maxWidth: '100%' }} />
      <p>Source: [Your NMHS] - updated daily</p>
    </div>
  )
}

// Option 2: Live Rainfall (Open-Meteo)
export function ProductRainfall() {
  const [rain, setRain] = useState('Loading...')

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-18.1&longitude=178.4&daily=precipitation_sum')
      .then(r => r.json())
      .then(data => setRain(data.daily.precipitation_sum[0] + ' mm'))
      .catch(() => setRain('12.4 mm (sample data)'))
  }, [])

  return <p>Today's expected rainfall: {rain}</p>
}

// Option 3: Live Sea Level (SPC Ocean Observations API)
export function ProductSeaLevel() {
  const [level, setLevel] = useState('Loading...')

  useEffect(() => {
    fetch('https://ocean-obs-api.spc.int/insitu/get_data/station/auasi?limit=1')
      .then(r => r.json())
      .then(data => setLevel(data.data[0]['sea_level (m)'] + ' m'))
      .catch(() => setLevel('1.48 m (sample data)'))
  }, [])

  return <p>Current sea level (Samoa, Auasi): {level}</p>
}
