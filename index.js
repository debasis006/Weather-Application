// https://api.openweathermap.org/data/2.5/weather?q=serampore&appid=b49a1ebd7e0a85d65bedb84bca3e66a2&units=metric

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weather_icon = document.querySelector(".weather_icon"),
  temp = document.querySelector(".temp"),
  city = document.querySelector(".city"),
  humidity = document.querySelector(".humidity"),
  wind = document.querySelector(".wind");

const api_key = "b49a1ebd7e0a85d65bedb84bca3e66a2";
const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const checkWeather = async (cityName) => {
  const response = await fetch(api + cityName + `&appid=${api_key}`);
  const data = await response.json();

  console.log(data);

  city.innerHTML = data.name;
  temp.innerHTML = Math.round(data.main.temp) + "°C";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weather_icon.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weather_icon.src = "./images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weather_icon.src = "./images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weather_icon.src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weather_icon.src = "./images/mist.png";
  }
};

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
