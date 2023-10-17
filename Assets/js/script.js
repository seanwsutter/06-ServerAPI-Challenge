const apiKEY = "762a9cd39fe01efc58fd07631e2f3dfa"
// var currentDate = dayjs().format('MM/DD/YYYY')
// var now = dayjs()


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
    + searchCityVal + "&limit=1&appid=" + apiKEY + "&units=imperial";
  fetch(geoURL)
  .then(response => response.json())
  .then(data => {
    lat = data[0].lat;
    lon = data[0].lon;
    console.log("get cords from data", data);
    getWeatherApi(lat, lon)
    forecastWeather(lat, lon)
  })
  .catch(function (error) {
    console.log("failed", error);
  });
};

// get weather api
function getWeatherApi(lat, lon) {
  // var apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKEY + "&units=imperial"
  var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat="
    + lat + "&lon=" + lon + "&appid=" + apiKEY + "&units=imperial";

   fetch(weatherURL)
      .then(response => response.json())
      .then(data => {
        console.log("data from weather api:", data);
        displayWeather(data) 
    })
};
  
function forecastWeather(lat, lon) {
  var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat="
    + lat + "&lon=" + lon + "&appid=" + apiKEY + "&units=imperial";
  fetch(forecastURL)
    .then(response => response.json())
    .then(dataF => {
      console.log("dataF from forecast api:", dataF);
      
      for (i = 6; i <= dataF.list.length; i += 7) {
        var forecastDay = `
                <card class="border p-3 shadow border-dark-subtle">
          <p class="card-text">` + dayjs(dataF.list[i].dt * 1000).format("MM/DD/YYYY") + `</p>
            <div class="card-body">
              <img src="https://openweathermap.org/img/wn/` + dataF.list[i].weather[0].icon + `.png" class="imgIcon" id="icon-img">
            <div class="card-body">
                <p class="card-text">`+ dataF.list[i].main.temp.toFixed(0) +`° F</p>
                <p class="card-text">`+ dataF.list[i].main.humidity+`% humidity</p>
                <p class="card-text">`+ dataF.list[i].wind.speed.toFixed(0)+` mph winds</p>
              </div>
            </div>
          </card>
  `

                    // append the day to the five-day forecast
                    $("#fiveDayForecast").append(forecastDay);
               }
            })
        };

// display weather function
function displayWeather(data) {
  var cityName = document.getElementById("city-name")
  cityName.innerHTML = data.name;
  
  var currentDate = document.getElementById("current-date")
  currentDate.innerHTML = dayjs().format("MM/DD/YYYY")

  var currentIcon = document.getElementById("current-icon")
  currentIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
  
  var currentDescription = document.getElementById("current-description")
  currentDescription.innerHTML = data.weather[0].description;
  
  var currentTemp = document.getElementById("current-temp")
  currentTemp.innerHTML = data.main.temp.toFixed(0) + "° F" 
  
  var currentHumidity = document.getElementById("current-humidity")
  currentHumidity.innerHTML = data.main.humidity + "% humidity";
  
  var currentWind = document.getElementById("current-wind-speed")
  currentWind.innerHTML = data.wind.speed.toFixed(0) + " mph winds";
  
};



// get every 8th value (24hours) in the returned array from the api call




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

// currentIcon.classList.remove("hide")

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
//    let ${ name } = data;
//    let ${ icon, description } = data.weather[0];
//    let ${ temp, humidty } = data.main;
//    let ${ speed } = data.wind;
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
