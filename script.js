async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '53219974dbc28cb45543fda93522406b';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.ok) {
            displayWeather(data);
        } else {
            throw new Error('City not found');
        }
    } catch (error) {
        console.error("Error fetching weather data", error);
        document.getElementById("weatherInfo").innerHTML = "<p>City not found. Please enter a valid city name.</p>";
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
