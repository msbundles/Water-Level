import requests
fRom = input("what is the first day and time you would like to get data from? (YYYYMMDD HR:MN) ")
to = input("what is the first day and time you would like to get data from? (YYYYMMDD HR:MN) ")
url = f"https://tidesandcurrents.noaa.gov/api/datagetter?begin_date={fRom}&end_date={to}&station=9087044&product=water_level&datum=igld&units=metric&time_zone=gmt&application=web_services&format=csv"
data = requests.get(url)
name = (f"NOAA_lake_height_data_{fRom}_{to}.csv")
name.replace(" ", "_")
name.replace(":","_")
out = open(name, "w+")
out.write(data.content)
