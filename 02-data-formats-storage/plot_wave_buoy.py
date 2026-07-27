# plot_wave_buoy.py
#
# Open the sample wave buoy CSV and plot wave height over time.
#
# Run with:
#     python plot_wave_buoy.py
#
# Requires: pandas, matplotlib
#     pip install pandas matplotlib

import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("sample_wave_buoy.csv")

print("First few rows:")
print(df.head())
print()

print("Rows with a missing wave height:")
print(df[df["wave_height_m"].isna()])
print()

print("Rows with a suspicious wave height (over 10m is very unusual):")
print(df[df["wave_height_m"] > 10])
print()

df["timestamp"] = pd.to_datetime(df["timestamp"])
df = df.sort_values("timestamp")

plt.figure(figsize=(9, 4))
plt.plot(df["timestamp"], df["wave_height_m"], marker="o")
plt.title("Wave Height Over Time - " + df["station"].iloc[0])
plt.xlabel("Time")
plt.ylabel("Wave Height (m)")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("wave_height_plot.png")
print("Saved plot to wave_height_plot.png")
plt.show()
