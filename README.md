# Weather App

A weather web application that displays current temperature and conditions for any city. Built with a Node.js/Express backend that proxies the OpenWeatherMap API and a vanilla JavaScript frontend.

## Prerequisites

- [Node.js](https://nodejs.org/)
- An [OpenWeatherMap API key](https://openweathermap.org/appid)
- [VS Code Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (for the frontend)

## Setup

1. Clone the repo:
   ```sh
   git clone https://github.com/CodingStormtrooper/weatherAPI.git
   cd weatherAPI
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the project root:
   ```
   OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Start the backend server:
   ```sh
   npm start
   ```

5. Open `weather_index.html` with Live Server (port 5501).

## How It Works

The backend server (`server.mjs`) runs on port 3000 and exposes a single endpoint:

```
GET /weather?city={city}
```

It proxies requests to the OpenWeatherMap API, keeping the API key server-side. The frontend sends requests to this endpoint, converts the temperature from Kelvin to Fahrenheit, and displays the result along with a weather icon.

## Tech Stack

- **Backend:** Node.js, Express, dotenv, node-fetch
- **Frontend:** HTML, CSS, vanilla JavaScript
