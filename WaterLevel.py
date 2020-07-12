import requests
import re
start = input("What is the day and time you would like to get data from? (YYYYMMDD HR:MN) ")
end = input("What is the day and time you would like to get data to? (YYYYMMDD HR:MN) ")
url = f"https://tidesandcurrents.noaa.gov/api/datagetter?begin_date={start}&end_date={end}&station=9087044&product=water_level&datum=igld&units=metric&time_zone=gmt&application=web_services&format=csv"
data = requests.get(url)
#The data retreival works, the only thing I have to do now is get the filename formatting correct.
nstart = re.sub(" ", "_", start)
nend = re.sub(" ", "_", start)

out = open(f"NOAA_lake_height_data_{nstart}_{nend}.csv", "w")
out.write(data.text)
print(data.text)
