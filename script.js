var userInput = document.getElementById('search-input')
var search = document.getElementById('search-button')

function searchWeather(userInput) {
    var apiKey = "219508d53c09462ba3344f4b9b6bbf02";
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + userInput + "&limit=5&appid=" + apiKey)
    .then(function(response) {
       return response.json()
    })
    .then(function(jsonData) {
        console.log(jsonData)
        //create variables that will store Latitude and longitude jsonData results
        var lat = jsonData[0].lat.value;
        var lon = jsonData[0].lon.value;
        //append to local storage
        localStorage.setItem("lat", lat);
        localStorage.setItem("lon", lon);
    fetch("api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey)
    .then(function(responses) {
        return responses.json()
        })
    .then(function(data) {
        console.log(data)
        })
    })
}
search.addEventListener("click",function() {
    var citySearch = userInput.value;
    searchWeather(citySearch);
})
    searchWeather()
    
    // h2.innerText = jsonData[0].lat
    // h3.innerText = jsonData[0].lon
    
