let cityInput = document.querySelector(".city");
let day = document.querySelector(".day");
let date = document.querySelector(".date");
let time = document.querySelector("time");
let temperature = document.querySelector(".temperature");
let maxTemp = document.querySelector(".maxtemp");
let minTemp = document.querySelector(".mintemp");
let windSpeed = document.querySelector(".windspeed");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");
let sunriseTime = document.querySelector(".sunrisetime");
let sunsetTime = document.querySelector(".sunsettime");
let weatherStatus = document.querySelector(".weatherstatus");
let image = document.querySelector(".image");

cityInput.addEventListener("keyup", showWeather);

function showWeather(e) {
  if (e.keyCode === 13) {
    let city = cityInput.value;

    let xml = new XMLHttpRequest();

    xml.open(
      "GET",
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={api_key}`
    );

    xml.onreadystatechange = function () {
      if (xml.readyState === 4 && xml.status === 200) {
        console.log(xml.responseText);
      }
    };
  }
}
