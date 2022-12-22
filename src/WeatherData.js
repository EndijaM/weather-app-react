import React from "react";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>
        {props.data.city} <small>({props.data.country})</small>
      </h1>

      <div className="row">
        <div className="col-sm-4">
          {" "}
          <img src={props.data.icon} alt={props.data.description} />{" "}
          <div>{props.data.description}</div>
        </div>
        <div className="col-sm-4"> Temperature </div>
        <div className="col-sm-4">
          {" "}
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
            <li>Pressure: {props.data.pressure} hPa </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
