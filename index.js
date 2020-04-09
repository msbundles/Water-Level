let url = new URL("https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20190101 10:00&end_date=20190201 10:24&station=9087044&product=water_level&datum=igld&units=metric&time_zone=gmt&application=web_services&format=json");
let params = url.searchParams;
const form = document.querySelector('#form');
let to;
let from;
let inputFieldFrom = document.querySelector('input[name="data-and-time-from"]');
let inputFieldTo = document.querySelector('input[name="data-and-time-to"]');
let dType = document.querySelector('input[name="dType"]');
let request = new XMLHttpRequest();
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
form.addEventListener('submit', event => {
    event.preventDefault()
    to = inputFieldTo.value;
    from = inputFieldFrom.value;
    params.set("begin_date", from);
    params.set("end_date", to);
    if(dType.value == 1){
        params.set("format", "json");
    }
    else if (dType.value == 2) {
        params.set("format", "xml");
    }
    else if (dType.value == 3) {
        params.set("format", "csv");
    }
    url.search = params.toString();
    let new_url = url.toString();
    request.open('GET', new_url, true);
    request.onload = function () {
        // Begin accessing JSON data here
        let dataout = JSON.stringify(this.response);
        
        
    }
    
    request.send();
    document.getElementById("sub").addEventListener("click", function () {
        // Generate download of hello.txt file with some content
        download(`Lake_Michigan_Level_Data.${params.get("format")}`, dataout);
    }, false);
    

})

