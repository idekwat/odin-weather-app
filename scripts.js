const submit = document.getElementById("submitButton");

submit.addEventListener('click', e => {
    e.preventDefault();
    getData();
});

function getData() {
    const inputLocation = document.getElementById("city").value;
    const loc = document.getElementById('currentLocation');
    const time = document.getElementById('currentTime');
    const desc = document.getElementById('description');
    const temper = document.getElementById('currentTemp');
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + inputLocation + '?key=NVEND8EB8W4EV3QYLAKN68SNY', 
        {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        JSON.stringify(response);
        /*        
        <h1 id ="currentLocation"></h1>
        <h2 id ="currentTime"></h2>
        <h3 id ="description"></h3>
        <h4 id ="currentTemp"></h4>
        */
       
       loc.textContent = response.resolvedAddress;
       time.textContent = response.currentConditions.datetime;
       desc.textContent = response.description;
       temper.textContent = response.currentConditions.temp;
    });
}