import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyWeatherForecast.css";

export default function OneDayForecast(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="OneDayForecast">
      <div className="DailyWeatherForecast-day-accurate">{day()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={54} />
      </div>
      <div className="DailyWeatherForecast-temperatures">
        <span className="DailyWeatherForecast-temperature-max">
          {maxTemp()}°
        </span>
        <span className="DailyWeatherForecast-temperature-min">
          {minTemp()}°
        </span>
      </div>
    </div>
  );
}
