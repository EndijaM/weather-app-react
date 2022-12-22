import React from "react";
import "./WeatherData.css";
import Temperature from "./Temperature";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>
        {props.data.city} <small>({props.data.country})</small>
      </h1>

      <div className="row">
        <div className="col-sm-4">
          <div className="description">
            {" "}
            <img src={props.data.icon} alt={props.data.description} />{" "}
            <div>
              {" "}
              <li>
                {" "}
                <strong>{props.data.description}</strong>{" "}
              </li>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          {" "}
          <Temperature value={props.data.temperature} />
        </div>
        <div className="col-sm-4">
          {" "}
          <ul>
            <br />

            <li>
              {" "}
              <strong> Humidity: </strong>
              {props.data.humidity} %
            </li>
            <li>
              {" "}
              <strong> Wind:</strong> {Math.round(props.data.wind)} mph
            </li>
            <li>
              {" "}
              <strong> Pressure: </strong>
              {props.data.pressure} hPa{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
