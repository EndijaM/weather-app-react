import React, { useState } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import Footer from "./Footer";
import WeatherData from "./WeatherData";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState("");
  const [update, setUpdate] = useState(false);

  function displayWeather(response) {
    setWeather({
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      pressure: response.data.main.pressure,
      country: response.data.sys.country,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
    setUpdate(true);
  }

  function citySearch() {
    let apiKey = "99b8f9330a1bfba3a85e523fd3c2e528";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    citySearch();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let searchForm = (
    <form action="" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-6 m-1">
          <input
            type="search"
            placeholder="Type a city"
            autocomplete="off"
            autoFocus="on"
            className="form-control"
            onChange={updateCity}
          />
        </div>
        <div className="col-sm-3 m-1">
          <input
            type="submit"
            value="Search"
            className="btn btn-secondary w-100"
          />
        </div>
        <div className="col-sm-2 m-1">
          <input type="button" value="📌" className="btn btn-secondary w-100" />
        </div>
      </div>
    </form>
  );

  if (update) {
    return (
      <div>
        <div className="container">
          <div className="searchForm">{searchForm}</div>
          <WeatherData data={weather} />
        </div>
        <Footer />
      </div>
    );
  } else {
    citySearch();
    return (
      <div className="container">
        <RotatingLines
          strokeColor="#0083ad"
          strokeWidth="5"
          animationDuration="0.75"
          width="250"
          visible={true}
        />
      </div>
    );
  }
}
