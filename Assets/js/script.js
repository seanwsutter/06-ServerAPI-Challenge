const apiKEY = "762a9cd39fe01efc58fd07631e2f3dfa"
const searchButtonEl = document.getElementById(".search-btn");
var lat = "";
// var lon = ""
// let searchBtnEl = document.getElementById("search-btn")
let searchCityInputEl = document.getElementById(".search-city-input");
let cityName = document.getElementById(".city-name");
console.log(cityName);

// const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKEY}`
// let url = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${apiKEY}`

// fetch(url)
// let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKEY}`
function getWeather() {
   fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&&appid=" + apiKEY)

      .then(response => response.json())
      .then(data => {

         console.log(data);
      })



};
getWeather()

function displayWeather() {
   let { name } = data;
   let { icon, description } = data.weather[0];
   let { temp, humidty } = data.main;
   let { speed } = data.wind;
   document.querySelector(".city-name").innerText = name;
   document.querySelector(".current-icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
   document.querySelector(".temp").innerHTML = temp;
   document.querySelector(".humidity").innerHTML = humidty + "%";
   document.querySelector(".wind").innerText = speed + "km/h";


};
// getWeather();




function searchText() {
   this.getWeather()(document.querySelector(".search-btn").value);
};


function getSearchInput() {

   cityName.innerHTML += searchCityInputEl;
   console.log(cityName);
};




















// getCurrentWeather()
// searchBtnEl.addEventListener("click", getCurrentWeather(), getSearchInput())


// function getWeatherAPI() {
//    var url = "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=762a9cd39fe01efc58fd07631e2f3dfa"

//    fetch(url)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//    console.log("in functuon getWe atherAPI..");

// }

// get text input from search input
// function getSearchInput() {
//    let cityName = document.getElementById("city-name")
//    cityName.innerHTML = searchCityInputEl.value
// }

// // Using Promise syntax:
// function getRedditPosts() {
//    fetch('https://www.reddit.com/r/all/top.json?limit=10')
//       .then(response => response.json())
//       .then(data => {
//          const posts = data.data.children.map(child => child.data);
//          console.log(posts.map(post => post.title));
//       })
//       .catch(error => console.error(error));
// }


// fetch(currentWeatherURL)
//    .then(data => {
//       return data.json();
//    })
//    .then(post => {
//       console.log(post);
//    });

