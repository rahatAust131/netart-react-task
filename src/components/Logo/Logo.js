import React from 'react';
import logo from "../../images/logo.png";
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo-img">
            <img src={logo} alt="" className="d-block w-25 m-auto" />
        </div>
    );
};

export default Logo;