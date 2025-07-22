//NVEND8EB8W4EV3QYLAKN68SNY
//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY

function getData() {
    const inputLocation = document.getElementById("city").value;
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + inputLocation + '?key=NVEND8EB8W4EV3QYLAKN68SNY', 
        {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
    });
}