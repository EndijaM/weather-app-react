import React from "react";
import "./WeatherData.css";
import Temperature from "./Temperature";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>
        {props.data.city} <small>({props.data.country})</small>
      </h1>
      <FormattedDate date={props.data.date} />

      <div className="row">
        <div className="col-sm-4">
          <div className="description">
            {" "}
            <WeatherIcon code={props.data.icon} size={70} />{" "}
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
          <Temperature value={Math.round(props.data.temperature)} />
        </div>
        <div className="col-sm-4 conditions">
          {" "}
          <ul className="">
            <br />

            <li>
              {" "}
              <strong> Humidity: </strong>
              {props.data.humidity} %
            </li>
            <li>
              {" "}
              <strong> Wind:</strong> {Math.round(props.data.wind)} km/h
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
