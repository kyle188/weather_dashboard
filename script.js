var userInput = document.getElementById('search-input')
var search = document.getElementById('search-button')
var searchedCities = document.getElementById('searched-cities')
var currentTemp = document.getElementById('current-temp')
var currentWind = document.getElementById('current-wind')
var currentHumidity = document.getElementById('current-humidity')
var displayCity = document.querySelector('.card-title')

function searchWeather(userInput) {
        var apiKey = "219508d53c09462ba3344f4b9b6bbf02";
        var coordApi = "https://api.openweathermap.org/geo/1.0/direct?q=" + userInput + "&appid=" + apiKey
    fetch(coordApi)
    .then(function (response) {
        response.json()
   
    .then(function(data) {
     //create variables that will store Latitude and longitude jsonData results
        var lat = data[0].lat
        var lon = data[0].lon
    fetch( "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&appid=782408e52c8c3294783b40fcfb93f113" + "&cnt=1")
    .then(function(response) {
        response.json()
    .then(function(data) {
        console.log(data)
        localStorage.setItem("city-searched", data.city.name)
        searchedCities.innerHTML = data.city.name
        displayCity.innerHTML = data.city.name + "  (" + moment().format('L') + ")"
        currentTemp.innerHTML = "Temp: " + data.list[0].main.temp + " °F"
        currentWind.innerHTML = "Wind Speed: " + data.list[0].wind.speed + " MPH"
        currentHumidity.innerHTML = "Humidity: " + data.list[0].main.humidity + "%"
         })
     })
     }) 
})
}
    search.addEventListener("click", function(event) {
      event.preventDefault
      var citySearch = userInput.value;
      searchWeather(citySearch);
})
    
