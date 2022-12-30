import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturtday",
    "Sunday",
  ];
  let day = days[props.date.getDay()];
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <div className="FormattedDate">
      <li>
        <em>Last updated:</em> {day} {hours}:{minutes}
      </li>
    </div>
  );
}
