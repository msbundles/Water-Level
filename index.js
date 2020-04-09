let url = URL("https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20190101 10:00&end_date=20190201 10:24&station=9087044&product=water_level&datum=igld&units=metric&time_zone=gmt&application=web_services&format=json");
var params = new URLSearchParams(url.search);
console.log(params);