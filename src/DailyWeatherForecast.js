import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyWeatherForecast.css";

export default function DailyWeatherForecast() {
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
