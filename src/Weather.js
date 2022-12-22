import React from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather(props) {
  function handleResponse(response) {
    return (
      <h3>
        The weather in ${response.data.name} is $
        {Math.round(response.data.main.temp)}°C
      </h3>
    );
  }

  let apiKey = "99b8f9330a1bfba3a85e523fd3c2e528";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(handleResponse);

  return (
    <form>
      <div className="row">
        <div className="col-sm-8">
          <input
            type="search"
            placeholder="Type a city"
            autocomplete="off"
            className="form-control"
          />
        </div>
        <div className="col-sm-2">
          <input
            type="submit"
            value="Search"
            className="btn btn-secondary w-100"
          />
        </div>
        <div className="col-sm-2">
          <input
            type="button"
            value="Local"
            className="btn btn-secondary w-100"
          />
        </div>
      </div>
    </form>
  );
}
