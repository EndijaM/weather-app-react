import React, { useState } from "react";

import "./DailyWeatherForecast.css";
import axios from "axios";
import OneDayForecast from "./OneDayForecast";

export default function DailyWeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="DailyWeatherForecast">
        <div className="row">
          <div className="col">
            <OneDayForecast data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "88724523008dc9e1be18f6eb6a959b67";
    let longitute = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitute}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
