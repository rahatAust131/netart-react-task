import React from "react";
import image1 from "../../images/1.png";
import image2 from "../../images/2.png";
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="left-img">
        <img src={image1} alt="" />
      </div>
      <div>
        <small>
          <strong>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </strong>
        </small>
        <small>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
        </small>
        <div className="right-img">
          <img src={image2} alt="" />
        </div>
        <small>
          Government of India has awarded the
          <strong>"National Energy Conservation Award 2018"</strong>. Mr. G.
          Selvaraj, Joint Managing Director of C.R.I. Group received the award
          from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
          Singh, Honorable Minister of State.
        </small>
      </div>
    </div>
  );
};

export default Header;
