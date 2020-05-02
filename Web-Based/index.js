let url = new URL("https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20190101 10:00&end_date=20190201 10:24&station=9087044&product=water_level&datum=igld&units=metric&time_zone=gmt&application=web_services&format=csv");
let params = url.searchParams;
const form = document.querySelector('#form');
let to;
let from;
let inputFieldFrom = document.querySelector('input[name="data-and-time-from"]');
let inputFieldTo = document.querySelector('input[name="data-and-time-to"]');
let request = new XMLHttpRequest();
form.addEventListener('submit', event => {
    event.preventDefault()
    to = inputFieldTo.value;
    from = inputFieldFrom.value;
    params.set("begin_date", from);
    params.set("end_date", to);
    url.search = params.toString();
    let new_url = url.toString();
    request.open('GET', new_url, true);
    request.onload = function () {
        document.getElementById("sub").addEventListener("click", function () {
            window.open(new_url, '_blank');
        }, false);
    }
    request.send();
})

