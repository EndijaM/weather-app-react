import React, { useState } from "react";

import "./Temperature.css";

export default function Temperature(props) {
  const [temperature, setTemperature] = useState(props.value);

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.value);
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.value * 9) / 5 + 32));
  }

  return (
    <div className="Temperature">
      <h2>
        {" "}
        {temperature}°{" "}
        <a href="/" className="Unit" onClick={showCelsius}>
          C |{" "}
        </a>
        <a href="/" className="Unit" onClick={showFahrenheit}>
          {" "}
          F{" "}
        </a>
      </h2>
    </div>
  );
}
