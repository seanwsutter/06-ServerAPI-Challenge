// apiKEY
const apiKEY = "762a9cd39fe01efc58fd07631e2f3dfa"
// const searchBtn = $(".search-btn");
// var searchHistContainer = $(".searchHistContainer");
// const citySearchHistory = [];
var citySearchHistory = [];

// search button event listener
var searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", searchBtnEvent)
// searchBtn.on("click", ".search-btn", searchBtnEvent);
// searchBtn.on("click", ".search-btn", saveCitySearch);
var buttonHistory = document.getElementById("searched-city-btn")
// const cityHistory = $(".searched-city-btn")
buttonHistory.addEventListener("click", searchBtnEvent)


// search city > get coords 
function searchBtnEvent(event) {
  var searchCity = document.getElementById("search-city-input");
  var searchCityVal = searchCity.value;
  event.preventDefault();

  if (!searchCityVal) {
    console.log("enter city name");
    return;
  } {
    console.log("searched city:", searchCityVal);
  }

  searchedButton(searchCityVal);
  getCoordinatesApi(searchCityVal);
  saveCitySearch(searchCityVal);

};
function searchedButton(searchCityVal) {
  buttonHistory.append`${searchCityVal}`
};
function saveCitySearch(searchCityVal) {
  citySearchHistory.push(searchCityVal);
  localStorage.setItem("searchHistory", JSON.stringify(citySearchHistory))
  // console.log(citySearchHistory);


};
JSON.parse(localStorage.getItem("searchHistory")) || [];

// get coordinates > get current weather & forecast
function getCoordinatesApi(searchCityVal) {
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

// get current weather using coords
function getWeatherApi(lat, lon) {
  var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat="
    + lat + "&lon=" + lon + "&appid=" + apiKEY + "&units=imperial";
  fetch(weatherURL)
    .then(response => response.json())
    .then(data => {
      console.log("data from weather api:", data);
      displayWeather(data);
    })
    .catch(function (error) {
      console.log("failed", error);

    });
};

// display current weather 
function displayWeather(data) {
  $("#city-name").html(data.name);
  $("#current-date").html(dayjs().format("MM/DD/YYYY"));
  $("#current-icon").html("https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png");
  $("#current-description").html(data.weather[0].description);
  $("#current-temp").html(data.main.humidity + "% humidity");
  $("#current-humidty").html(data.main.humidity + "% humidity");
  $("#current-wind-speed").html(data.wind.speed.toFixed(0) + " mph winds");
};

// get weather forecast then display to html
function forecastWeather(lat, lon) {
  var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat="
    + lat + "&lon=" + lon + "&appid=" + apiKEY + "&units=imperial";
  fetch(forecastURL)
    .then(response => response.json())
    .then(dataF => {
      console.log("dataF from forecast api:", dataF);

      $("#fiveDayForecast").html("")
      for (i = 6; i <= dataF.list.length; i += 7) {
        var forecastDay = `
      <card class="border p-3 shadow border-dark-subtle">
      <p class="card-text">` + dayjs(dataF.list[i].dt * 1000).format("MM/DD/YYYY") + `</p>
      <div class="card-body"><img src="https://openweathermap.org/img/wn/` + dataF.list[i].weather[0].icon + `.png"  id="icon-img">
      <div class="card-body">
                <p class="card-text">`+ dataF.list[i].main.temp.toFixed(0) + `° F</p>
                <p class="card-text">`+ dataF.list[i].main.humidity + `% humidity</p>
                <p class="card-text">`+ dataF.list[i].wind.speed.toFixed(0) + ` mph winds</p>
              </div>
            </div>
          </card>
          `
        $("#fiveDayForecast").append(forecastDay);
      }
    })
};

// searchBtn.on("click", ".search-btn", getCoordinatesApi, saveCitySearch);
// searchBtn.on("click", searchBtnEvent,  saveCitySearch);
// JSON.parse(localStorage.getItem)
// storage
// console.log(citySearchHistory);

// function saveCitySearch(searchCity) {
//   citySearchHistory.push(searchCity);
//   console.log(citySearchHistory);
//   localStorage.setItem("citySearchHistory", JSON.stringify(citySearchHistory))

// };

/* <div class="searchHistoryContainer" id="search-history-container">
  <h6 class="d-flex justify-content-center aibn text-align-center fw-bold mt-1 p-2 mb-1">Search History</h6>
  <button type="submit" class="btn shadow-lg text w-100 t-2 p-2 mb-2 btn-outline-dark text-lowercase"
    id="searched-city-btn">City
    </button>
    </div> */

// var searchHistory
// searchHistory = $("<h5>");
// searchHistory.text(searchCityVal);

// currentIcon.classList.remove("hide")

////////////////////////////////////////////

// apiKEY = "762a9cd39fe01efc58fd07631e2f3dfa"
//  var geoURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchCityVal + "&limit=1&appid=" + apiKEY
// var apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKEY + "&units=imperial"
// var apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKEY + "&units=imperial"
// var cityName = document.getElementById("city-name")
// cityName.innerHTML = data.name;

// var currentDate = document.getElementById("current-date")
// currentDate.innerHTML = dayjs().format("MM/DD/YYYY")

// var currentIcon = document.getElementById("current-icon")
// currentIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

// var currentDescription = document.getElementById("current-description")
// currentDescription.innerHTML = data.weather[0].description;

// var currentTemp = document.getElementById("current-temp")
// currentTemp.innerHTML = data.main.temp.toFixed(0) + "° F"

// var currentHumidity = document.getElementById("current-humidity")
// currentHumidity.innerHTML = data.main.humidity + "% humidity";
// var searchBtn = document.getElementById("search-btn");
// searchBtn.addEventListener("click", searchBtnEvent, saveCitySearch);