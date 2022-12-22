import React, { useState } from "react";

import "./Temperature.css";

export default function Temperature(props) {
  const [degree, setDegree] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();

    setDegree("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();

    setDegree("fahrenheit");
  }

  if (degree === "celsius") {
    return (
      <div className="Temperature">
        <h2>
          {props.value}°{" "}
          <span className="Unit">
            <a href="/" onClick={showCelsius} className="deactivated">
              C{" "}
            </a>
            |
            <a href="/" onClick={showFahrenheit}>
              {" "}
              F{" "}
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <h2>
          {Math.round((props.value * 9) / 5 + 32)}°{" "}
          <span className="Unit">
            <a href="/" onClick={showCelsius}>
              C{" "}
            </a>
            |
            <a href="/" onClick={showFahrenheit} className="deactivated">
              {" "}
              F{" "}
            </a>
          </span>
        </h2>
      </div>
    );
  }
}
