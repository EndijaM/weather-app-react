import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This is an{" "}
        <a
          href="https://github.com/EndijaM/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source code
        </a>
        , hosted on
        <a
          href="https://benevolent-entremet-723e8f.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Netlify{" "}
        </a>
        <br />
        and is coded by <strong>Endija Mathur</strong>
      </p>
    </div>
  );
}
