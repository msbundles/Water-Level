let url = new URL("https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20190101 10:00&end_date=20190201 10:24&station=9087044&product=water_level&datum=igld&units=metric&time_zone=gmt&application=web_services&format=csv");
let params = url.searchParams;
const form = document.querySelector('#form');
let inputFrom = document.querySelector('input[name="data-and-time-from"]');
let inputTo = document.querySelector('input[name="data-and-time-to"]');
let request = new XMLHttpRequest();
form.addEventListener('submit', event => {
    event.preventDefault()
    params.set("begin_date", inputFrom.value);
    params.set("end_date", inputTo.value);
    url.search = params.toString();
    let new_url = url.toString();
    request.open('GET', new_url, true);
    request.onload = function () {
        window.open(new_url, '_blank');
    }
    request.send();
})
