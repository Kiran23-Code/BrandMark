import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherWidget.css';

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const apiKey = '09f74d7ff5f7c9f321990d4160da2066'; 
  const city = 'Bengaluru';

  useEffect(() => {
    // Fetch weather data from the API
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <div className="weather-widget">
      {weather ? (
        <div>
          <p>{city} Weather</p>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}

export default WeatherWidget;
