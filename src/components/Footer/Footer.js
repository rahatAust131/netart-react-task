import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="hyperlink">
                <FontAwesomeIcon className="icon phone-icon" icon={faPhoneAlt} />
                <small>Toll free 1800 200 1234</small>
            </div>
            <div className="hyperlink">
                <FontAwesomeIcon className="icon" icon={faFacebook} />
                <small><a href="https://facebook.com/cripumps">www.facebook.com/cripumps</a></small>
            </div>
            <div className="hyperlink">
                <FontAwesomeIcon className="icon" icon={faGlobe} />
                <small><a href="https://crigroups.com">www.crigroups.com</a></small>
            </div>
        </div>
    );
};

export default Footer;