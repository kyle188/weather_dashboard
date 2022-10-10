var apiKey = "219508d53c09462ba3344f4b9b6bbf02";
var userInput = document.getElementById('search-input').value
var h3 = document.querySelector('h3')


fetch("http://api.openweathermap.org/geo/1.0/direct?q=milwaukee&limit=5&appid=219508d53c09462ba3344f4b9b6bbf02")
    .then(function(response) {
        return response.json()
    })
    .then(function(jsonData) {
        console.log(jsonData)
        //create variables that will store Latitude and longitude jsonData results
        var latitude = jsonData[0].lat
        var longitude = jsonData[0].lon
        //append to local storage
    })
    
    
    // localStorage.setItem("lat", lat);
    // localStorage.setItem("lon", lon);
    // h2.innerText = jsonData[0].lat
    // h3.innerText = jsonData[0].lon
    
