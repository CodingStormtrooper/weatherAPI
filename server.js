import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3000;

// Enable All CORS Requests
app.use(cors());

app.get('/weather', (req, res) => {
    const city = req.query.city;
    const apiKey = 'c46197112d07804a8ecde3b402390a47'; // Replace this with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            res.json(data); // Send the API response back to the client
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            res.status(500).json({ error: 'Internal Server Error' }); // Send an error response to the client
        });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});
