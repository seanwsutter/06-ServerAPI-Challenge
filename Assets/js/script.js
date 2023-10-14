// open weather api call
let getWeatherData = function (city) {
   let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ce39e7239416ad754359ca762d28521a&units=imperial";

   // make a request to the url
   fetch(apiUrl)

      .then(function (response) {
         console.log(k);
         // request was successful
         if (response.ok) {
            response.json().then(function (data) {
               displayWeather(data);
            });
            // request fails
         } else {
            alert("Error: " + response.statusText);
         }
      })

      // alert user if there is no responce from OpenWeather
      .catch(function (error) {
         alert("Unable to connect to OpenWeather");
      })
};

// function getWeatherData(city) {
//    let apiURL =
// }

// let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ce39e7239416ad754359ca762d28521a&units=imperial";

// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}



















// const APIKey = "762a9cd39fe01efc58fd07631e2f3dfa";
// console.log(APIKey);

// const URL = "https://api.openweathermap.org/data/2.5/forecast/daily?"
// "q=CITY&cnt=7&units=imperial&APPID=YOUR_APP_ID";
// https: api.openweathermap.org / data / 2.5 / forecast ? q = { city } & appid={ "762a9cd39fe01efc58fd07631e2f3dfa" }

// api.openweathermap.org / data / 2.5 / forecast ? lat = { lat } & lon={ lon }& appid={"762a9cd39fe01efc58fd07631e2f3dfa"}

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={"762a9cd39fe01efc58fd07631e2f3dfa"}

// https://api.openweathermap.org/data/2.5/forecast?q=New%20York&appid=<your-api-key>&cnt=5


