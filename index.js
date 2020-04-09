let url = new URL("https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20190101 10:00&end_date=20190201 10:24&station=9087044&product=water_level&datum=igld&units=metric&time_zone=gmt&application=web_services&format=json");
let params = url.searchParams;
const form = document.querySelector('#form');
let to;
let from;
let inputFieldFrom = document.querySelector('input[name="data-and-time-from"]')
let inputFieldTo = document.querySelector('input[name="data-and-time-to"]')
let request = new XMLHttpRequest()
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
        // Begin accessing JSON data here
        let data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var val = data[key];
                    console.log(val);
                }
            }
        } else {
            console.log('error')
        }
    }

    request.send()
})

