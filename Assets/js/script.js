// note APIKey = "762a9cd39fe01efc58fd07631e2f3dfa"

// let searchCityInputEl = document.getElementById("search-city-input");
// let cityName = document.getElementById("city-name")


// get weather data
function getWeather() {
   var url = "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=762a9cd39fe01efc58fd07631e2f3dfa"

   fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
   console.log("in functuon getWeather..");

}
// getWeather();


// get text input from search input
function getSearchInput() {
   let searchCityInputEl = document.getElementById("search-city-input");
   let cityName = document.getElementById("city-name")
   cityName.innerHTML = searchCityInputEl.value
   // console.log(cityName);
}
// fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + searchCityInputEl.value + "&appid=762a9cd39fe01efc58fd07631e2f3dfa")

//    .then(response => response.json())
//    .then(data => {
//       for (i = 0; i < 5; i++) {
//          document.getElementById("day" + (i + 1) + "temp").innerHTML = "temp:" + Number(data.list[i].main.temp - 278.65).toFixed(1) + "°";
//       }
//    })





// var url = "https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=762a9cd39fe01efc58fd07631e2f3dfa"
// var url = "https://api.openweathermap.org / data / 2.5 / forecast ? q = London & appid=762a9cd39fe01efc58fd07631e2f3dfa}"

// api.openweathermap.org / data / 2.5 / forecast ? q = { city name } & appid={API key }
// "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=762a9cd39fe01efc58fd07631e2f3dfa"
// display weather data

// let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ce39e7239416ad754359ca762d28521a&units=imperial";




















// console.log(APIKey);

// const URL = "https://api.openweathermap.org/data/2.5/forecast/daily?"
// "q=CITY&cnt=7&units=imperial&APPID=YOUR_APP_ID";
// https: api.openweathermap.org / data / 2.5 / forecast ? q = { city } & appid={ "762a9cd39fe01efc58fd07631e2f3dfa" }

// api.openweathermap.org / data / 2.5 / forecast ? lat = { lat } & lon={ lon }& appid={"762a9cd39fe01efc58fd07631e2f3dfa"}

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={"762a9cd39fe01efc58fd07631e2f3dfa"}

// https://api.openweathermap.org/data/2.5/forecast?q=New%20York&appid=<your-api-key>&cnt=5


