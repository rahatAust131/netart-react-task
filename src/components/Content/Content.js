import React from "react";
import image3 from "../../images/3.png";
import "./Content.css";

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-text">
      <small>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </small>
      </div>
      <div className="content-img">
        <img src={image3} alt="" />
      </div>
      <div className="text-center">
        <small>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </small>
      </div>
    </div>
  );
};

export default Content;
