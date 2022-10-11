var userInput = document.getElementById('search-input')
var search = document.getElementById('search-button')
var currentCity = document.getElementById('current-city')
var currentTemp = document.getElementById('current-temp')

function searchWeather(userInput) {
    var apiKey = "219508d53c09462ba3344f4b9b6bbf02";
    var coordApi = "http://api.openweathermap.org/geo/1.0/direct?q=" + userInput + "&appid=" + "219508d53c09462ba3344f4b9b6bbf02"
    fetch(coordApi)
    .then(function (response) {
       response.json()
   
    .then(function(data) {
        console.log(data)
        
        //create variables that will store Latitude and longitude jsonData results
        var lat = data[0].lat
        var lon = data[0].lon
        //append to local storage
        // localStorage.setItem("lat", lat);
        // localStorage.setItem("lon", lon);
    fetch( "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&appid=782408e52c8c3294783b40fcfb93f113" + "&cnt=1")
    .then(function(response) {
         response.json()
     .then(function(data) {
         console.log(data)
        currentCity.innerHTML = data.city.name
        currentTemp.innerHTML = data.list[0].main.temp
        })
     })
     }) 
})
}
search.addEventListener("click",function() {
    var citySearch = userInput.value;
    searchWeather(citySearch);
})
    
