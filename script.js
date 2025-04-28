document.getElementById("searchBtn").addEventListener("click", function () {
  const city = document.getElementById("cityInput").value;
  document.getElementById("cityInput").value = "";
  getWeather(city);
});

function getWeather(city) {
  const url = `/api/weather?city=${city}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

      document.getElementById("weatherResult").innerHTML = `
        <h2>${data.name}</h2>
        <img src="${iconUrl}" alt="Weather icon">
        <p>Description: ${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Feels like: ${data.main.feels_like} °C</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}>`;
    })
    .catch((error) => {
      console.log("Error:", error);
      document.getElementById(
        "weatherResult"
      ).innerHTML = `<p>City not found. Please try again.</p>`;
    });
}
