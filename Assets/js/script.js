const apiKEY = "762a9cd39fe01efc58fd07631e2f3dfa"

// search button
var searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", searchBtnEvent);
var searchCity = document.getElementById("search-city-input");



// click search city > get coords api > get city weather
function searchBtnEvent(event) {
   event.preventDefault();
   var searchCityVal = searchCity.value; 

   if (!searchCityVal) {
  console.log("enter city name");
      return;
  } {
    console.log("searched city", searchCityVal);
   }
  getCoordinatesApi(searchCityVal);
  
};

// get coords for weather
function getCoordinatesApi(searchCityVal) {
  //  var geoURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchCityVal + "&limit=1&appid=" + apiKEY
  var geoURL = "https://api.openweathermap.org/geo/1.0/direct?q="
  + searchCityVal + "&limit=1&appid=" + apiKEY;
  fetch(geoURL)
  .then(response => response.json())
  .then(data => {
    lat = data[0].lat;
    lon = data[0].lon;
    console.log("get cords from data", data);
    getWeatherApi(lat, lon)
  })
  .catch(function (error) {
    console.log("failed", error);
  });
};


// get weather api
function getWeatherApi(lat, lon) {
  // var apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKEY + "&units=imperial"
  var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat="
  + lat + "&lon=" + lon + "&appid=" + apiKEY;


   fetch(weatherURL)
      .then(response => response.json())
      .then(data => {
        console.log("data from weather api:", data);
        displayWeather(data) 
    
      })
      
};


// display weather function

function displayWeather(data) {
  var cityName = document.getElementById("city-name")
  cityName.innerHTML = data.name;
  
  var currentIcon = document.getElementById("current-icon")
  currentIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
  // currentIcon.classList.remove("hide")
  
  var currentTemp = document.getElementById("current-temp")
  currentTemp.innerHTML = data.main.temp + " degrees"
  
  var currentHumidity = document.getElementById("current-humidity")
  currentHumidity.innerHTML = data.main.humidity + " % humidity";
  
  var currentWind = document.getElementById("current-wind-speed")
  currentWind.innerHTML = data.wind.speed + " km/h winds";
  
  // ddocument.querySelector(".city-name").innerText = name;
  // for (var i = -1; i <= data.list.length; i += 8) {
  //   console.log(i);
  //   let index;
  //   if (i === -1) {
  //     index = i + 1
  //   } else {
  //     index = i
  //   }
  //   let temperature = Math.round(data.list[index].main.temp);
  //   let humidity = data.list[index].main.humidity;
  //   let windSpeed = data.list[index].wind.speed;

  };


// <!-- current weather -- >
//   <card class="text-end w-75 p-3 m-3 bg-light shadow-lg border border-dark-subtle rounded">
//     <h3 class="cityName mb-2 p-2 mt-2 bolder" id="city-name">city name</h3>

//     <div class="container-fluid" id="current-weather">
//       <img src="https://openweathermap.org/img/wn/04n.png" alt="" class="currentIcon" id="currentIcon" />
//       <p class="dateClass" id="current-date">date</p>
//       <p class="tempClass" id="current-temp">temperature</p>
//       <p class="humidityClass" id="current-humidity">humidity</p>
//       <p class="windClass" id="current-wind-speed">wind speed</p>
//       <p class="uvClass" id="current-uv-index">u/v index</p>
//     </div>
//   </card>






















////////////////////////////////////////////
      
// var apiKEY = "762a9cd39fe01efc58fd07631e2f3dfa"
// var lat = "";
// var lon = ""
// let searchBtnEl = document.getElementById("search-btn")
// let searchCityInputEl = document.getElementById(".search-city-input");
// let cityName = document.getElementById(".city-name");

// const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKEY}`
// let url = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${apiKEY}`
  
// function getSearchInput() {
//    let searchCityInputEl = document.getElementById("search-city-input");
//    let citySearch = document.getElementById("city-name")
//    citySearch.innerHTML = searchCityInputEl.value
//    // console.log(searchCity);
// }
// fetch(url)
// const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKEY}`

// getCurrentWeather()
// searchBtnEl.addEventListener("click", getCurrentWeather(), getSearchInput())

// getWeather()
// function displayWeather() {
//    let { name } = data;
//    let { icon, description } = data.weather[0];
//    let { temp, humidty } = data.main;
//    let { speed } = data.wind;
//    document.querySelector("city-name").innerText = name;
//    document.querySelector("current-icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
//    document.querySelector("temp").innerHTML = temp;
//    document.querySelector("humidity").innerHTML = humidty + "%";
//    document.querySelector("wind").innerText = speed + "km/h";
// function getSearchInput() {
//    cityName.innerHTML += searchCityInputEl;
//    console.log(cityName);
// };
//  Using Promise syntax:
// function getRedditPosts() {
// fetch('https://www.reddit.com/r/all/top.json?limit=10')
//    .then(response => response.json())
//    .then(data => {
