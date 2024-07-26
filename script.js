const apiKey = "aa6c6d42241638dd10385f3ed6f035c2";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const displayImage = document.querySelector("#Weather-image");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  if (data.name == undefined) {
    document.querySelector("#display-city").innerHTML =
      "No data available for this city";
  } else {
    document.querySelector("#display-city").innerHTML = data.name;
  }
  document.querySelector("#temp").innerHTML = Math.round(data.main.temp);
  document.querySelector("#humidity").innerHTML = data.main.humidity;
  document.querySelector("#windspeed").innerHTML = data.wind.speed;
  const weatherCondition = data.weather[0].main;
  if (weatherCondition == "Clouds") {
    displayImage.src = "images/clouds.png";
  } else if (weatherCondition == "Clear") {
    displayImage.src = "images/clear.png";
  } else if (weatherCondition == "Rain") {
    displayImage.src = "images/rain.png";
  } else if (weatherCondition == "Drizzle") {
    displayImage.src = "images/drizzle.png";
  } else if (weatherCondition == "Mist") {
    displayImage.src = "images/mist.png";
  } else if (weatherCondition == "Snow") {
    displayImage.src = "images/snow.png";
  } else {
    displayImage.src = "images/clear.png";
  }
}
const searchBox = document.querySelector("#city-name");
const searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
