function getWeatherData(city) {
    return fetch(`http://localhost:3000/weather?city=${city}`)
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const cityInput = document.getElementById('city-input');
    const cityElement = document.getElementById('city');
    const temperatureElement = document.getElementById('temperature');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherConditionElement = document.getElementById('weather-condition');

    searchButton.addEventListener('click', function(event) {
        event.preventDefault();

        const city = cityInput.value;

        if (!city) {
            alert('Please enter a city name.');
            return;
        }

        getWeatherData(city)
            .then(data => {
                const temperatureInCelsius = data.main.temp - 273.15;
                const temperatureInFahrenheit = (temperatureInCelsius * 9/5) + 32;

                cityElement.textContent = `City: ${data.name}`;
                temperatureElement.textContent = `Temperature: ${temperatureInFahrenheit.toFixed(2)}°F`;

                const weatherIcon = data.weather[0].icon;
                const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
                const weatherImg = document.createElement('img');
                weatherImg.src = weatherIconUrl;
                weatherConditionElement.innerHTML = '';
                weatherConditionElement.appendChild(weatherImg);

                weatherInfoDiv.style.display = 'block';
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    });
});
