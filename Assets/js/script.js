const apiKEY = "762a9cd39fe01efc58fd07631e2f3dfa";
var lat = ""
var lon = ""
let searchBtnEl = document.getElementById("search-btn")
let searchCityInputEl = document.getElementById("search-city-input")
let cityName = document.getElementById("city-name")


// const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKEY}`
function getCurrentWeather() {
   let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKEY}`
   fetch(url)
      .then(response => response.json())
      .then(data => {

         console.log(data);
      });
}

// getCurrentWeather()
searchBtnEl.addEventListener("click", getCurrentWeather(), getSearchInput())


// function getWeatherAPI() {
//    var url = "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=762a9cd39fe01efc58fd07631e2f3dfa"

//    fetch(url)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//    console.log("in functuon getWe atherAPI..");

// }

// get text input from search input
function getSearchInput() {
   let cityName = document.getElementById("city-name")
   cityName.innerHTML = searchCityInputEl.value
}


function getSearchInput() {
   cityName.innerHTML = searchCityInputEl.value
   // console.log(cityName);
}

// Using Promise syntax:
function getRedditPosts() {
   fetch('https://www.reddit.com/r/all/top.json?limit=10')
      .then(response => response.json())
      .then(data => {
         const posts = data.data.children.map(child => child.data);
         console.log(posts.map(post => post.title));
      })
      .catch(error => console.error(error));
}


// fetch(currentWeatherURL)
//    .then(data => {
//       return data.json();
//    })
//    .then(post => {
//       console.log(post);
//    });





