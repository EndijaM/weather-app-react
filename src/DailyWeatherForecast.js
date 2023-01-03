import React, { useSate } from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyWeatherForecast.css";
import axios from "axios";

export default function DailyWeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "99b8f9330a1bfba3a85e523fd3c2e528";
  let longitute = props.coordinates.lon;
  let latitude = props.coordinates.lat;

  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitute}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="DailyWeatherForecast">
      <div className="row">
        <div className="col">
          <div className="DailyWeatherForecast-day">Thu</div>
          <div>
            <WeatherIcon code="11d" size={54} />
          </div>
          <div className="DailyWeatherForecast-temperatures">
            <span className="DailyWeatherForecast-temperature-max">19°</span>
            <span className="DailyWeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
