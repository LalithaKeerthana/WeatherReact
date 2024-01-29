

import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'; 

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const apiKey = 'b5ad460f2a5244658cb80344230512';

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.location.name}</h2>
          <p className="temperature">Temperature: {weatherData.current.temp_c} °C</p>
          <p className="condition">Condition: {weatherData.current.condition.text}</p>
          
        </div>
      )}
    </div>
  );
};

export default Weather;

 

  