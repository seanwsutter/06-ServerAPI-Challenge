const apiKEY = "762a9cd39fe01efc58fd07631e2f3dfa"

// search button
var searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", searchBtnEvent);
var searchCity = document.getElementById("search-city-input");



// city search then get weather api
function searchBtnEvent(event) {
   event.preventDefault();
   var searchCityVal = searchCity.value; 

   if (!searchCityVal) {
  console.log("enter city name");
      return;
  } {
    console.log("searched city", searchCityVal);
   }
   getWeatherApi(searchCityVal);
};

// // weather API
// function getCoordinatesApi (searchCityVal) {
// //  var geoURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchCityVal + "&limit=1&appid=" + apiKEY
//   var apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKEY + "&units=imperial"
  
//   fetch(geoURL)
//   .then(response => response.json())
//   .then(data => {
//     let lat = data[0].lat.toFixed(2);
//     let lon = data[0].lon.toFixed(2);
//     getWeatherApi(lat, lon);
//   })
//   .catch(function (error) {
//     console.log("failed", error);
//   });
// };

// get weather api
function getWeatherApi(searchCity) {
  // var apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKEY + "&units=imperial"
  var apiURL = "https://api.openweathermap.org/geo/1.0/direct?q="+searchCity+"&limit=1&appid=" + apiKEY


   fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        console.log("data from weather api:", data);
        displayWeather(data)
      })
      .catch(function (error) {
         
         console.log("failed to get weather api", error)
      });
};


// display weather function

function displayWeather(data) {
  let cityName = data[0].name;
  document.getElementById("city-name").innerHTML = cityName;
  // ddocument.querySelector(".city-name").innerText = name;
  let icon = data
  document.querySelector(".current-icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".temp").innerHTML = temp;
  document.querySelector(".humidity").innerHTML = humidty + "%";
  document.querySelector(".wind").innerText = speed + "km/h";


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
