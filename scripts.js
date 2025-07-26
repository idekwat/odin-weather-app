const submit = document.getElementById("submitButton"); //submit button

//Checking if submit button is clicked or enter is pressed
submit.addEventListener('click', e => {
    e.preventDefault(); //to prevent from posting on the browser
    getData();
});

function getData() {
    //various elements
    const inputLocation = document.getElementById("city").value;
    const loc = document.getElementById('currentLocation');
    const time = document.getElementById('currentTime');
    const desc = document.getElementById('description');
    const temper = document.getElementById('currentTemp');

    //fetching for API
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + inputLocation + '?key=NVEND8EB8W4EV3QYLAKN68SNY', 
        {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        JSON.stringify(response); //Stringify is used because the response is still JSON
       
        //posting content from JSON to the elements
       loc.textContent = response.resolvedAddress;
       time.textContent = response.currentConditions.datetime;
       desc.textContent = response.description;
       temper.textContent = response.currentConditions.temp;
    });
}