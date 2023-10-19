function getWeatherData(city) {
    const apiKey = 'c46197112d07804a8ecde3b402390a47'; // Replace this with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the API response data here
            console.log(data);
            return data;
        })
        .catch(error => {
            // Handle errors here
            console.error('Error fetching weather data:', error);
        });
}

const city = 'New York'; // Replace this with the city you want to get weather data for
getWeatherData(city)
    .then(data => {
        // Handle the API response data here
        // You can update your UI or perform other actions with the data
		
	
	
	});
	
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const cityInput = document.getElementById('city-input');
    const cityElement = document.getElementById('city');
    const temperatureElement = document.getElementById('temperature');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherConditionElement = document.getElementById('weather-condition'); // Assuming you have an element with this ID in your HTML

    searchButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const city = cityInput.value;

            if (!city) {
            alert('Please enter a city name.');
            return;
        }
        getWeatherData(city)
            .then(data => {
                const temperatureInCelsius = data.main.temp - 273.15;
                const temperatureInFahrenheit = (temperatureInCelsius * 9/5) + 32;

                // Update UI elements with weather data in Fahrenheit
                cityElement.textContent = `City: ${data.name}`;
                temperatureElement.textContent = `Temperature: ${temperatureInFahrenheit.toFixed(2)}°F`;
                
                                // Set weather condition image
                const weatherIcon = data.weather[0].icon;
                const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
                const weatherImg = document.createElement('img');
                weatherImg.src = weatherIconUrl;
                weatherConditionElement.innerHTML = ''; // Clear previous content
                weatherConditionElement.appendChild(weatherImg);
                
                // Show weather info div
                weatherInfoDiv.style.display = 'block';
            })
            .catch(error => {
                // Handle errors here
                console.error('Error fetching weather data:', error);
            });
    });
});
