import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Banner.css"

const Banner = () => {
    return (
      <div className="banner">
        <div>
          <h1>
            Hi,
            <br /> Wellcome to Shimla Hospital
          </h1>
          <NavLink to="/contact">
            <button> Contact Us</button>
          </NavLink>
        </div>
      </div>
    );
};

export default Banner;