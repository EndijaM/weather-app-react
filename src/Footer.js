import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="Footer">
        <p>
          This is an{" "}
          <a
            href="https://github.com/EndijaM/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source code
          </a>
          , hosted on
          <a
            href="https://radiant-manatee-22459f.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Netlify{" "}
          </a>
          <br />
          and is coded by <strong>Endija Mathur</strong>
          <br />
        </p>
      </div>
      <span className="Footer-picture-credit">
        <small>
          <a
            href="https://www.freepik.com/free-vector/blue-watercolor-map-world_20157123.htm#query=world%20map&position=23&from_view=keyword"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image by Vectonauta
          </a>{" "}
          on Freepik
        </small>
      </span>
    </div>
  );
}
