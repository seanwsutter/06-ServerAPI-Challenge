# 06 Server-Side APIs: Weather Dashboard Challenge


## Overview


* The weather dashboard will dynamically update HTML and CSS upon searching for city.

* Using APIs from [OpenWeatherMap](https://openweathermap.org/) 

* fetch weather data for current & 5 Day forecast 

* `localStorage` and `JSON` to store and retrieve data from APIs

* [Day.js](https://day.js.org/) to handle dates and times


## Specific Goals

* Searched city will wil get coordinates (lat, lon), then current weather & forecast.


* OpenWeatherMap APIs used:
```
api.openweathermap.org/data/2.5/weather?q={city}&appid={APIkey}

api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={APIkey}

api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIkey}
```

* Retrieved data for weather conditions
  - Coordinates (lat, lon) of city
  - Description & Icon
  - Temperature
  - Humidity
  - Wind speed
  



## Example Preview

![Preview](./assets/images/Xo4yquY.png)



## Deployment

* GitHub [Pages URL](https://seanwsutter.github.io/06-serverapi-challenge-sws/)

* Github [Repository](https://github.com/seanwsutter/06-serverapi-challenge-sws/)




