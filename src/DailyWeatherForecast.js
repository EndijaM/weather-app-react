import React, { useSate } from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyWeatherForecast.css";
import axios from "axios";

export default function DailyWeatherForecast(props) {
  let [loaded, setLoaded] = useSate(false);
  let [forecast, setForecast] = useSate(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
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
  } else {
    let apiKey = "88724523008dc9e1be18f6eb6a959b67";
    let longitute = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitute}&exclude={part}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
