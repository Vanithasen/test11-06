import React, { useState, useEffect } from "react";
import "./Weather.css";


function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
 
// Syntax: :useEffect(() => { /* effect logic */ }, [dependencies]);

  useEffect(() => {

    /*async function fetchData() {
      try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Async operation failed:", error.message);
      }
    }*/

    const fetchWeather = async () => {
      try {
        const apiKey = "56dbc3286543a278cc1307c7cccbb95d";

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();
        setWeather(data);
        console.log(weather);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h1>Weather App</h1>

        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {weather && weather.main && (
          <div className="weather-info">
            <h2>{weather.name}</h2>

            <div className="details">
              <div className="box">
                <h3>{weather.main.temp}°C</h3>
                <p>Temperature</p>
              </div>

              <div className="box">
                <h3>{weather.main.humidity}%</h3>
                <p>Humidity</p>
              </div>

              <div className="box">
                <h3>{weather.wind.speed}</h3>
                <p>Wind Speed</p>
              </div>
            </div>

            <p className="condition">
              {weather.weather[0].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;