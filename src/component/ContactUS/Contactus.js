import React from "react";
import "./Contact.css";

const Contactus = () => {
  return (
    <div>
      <div className="top bg-info">
        <h1>Contact Us</h1>
      </div>
      <div className="row py-4">
        <div className="col-12 col-md-6 col-lg-4">
          <h3>Headquarters</h3>
          <h5>#42 PurboPara</h5>
          <h5>Gopalnagar Bazar</h5>
          <h5>FaridPur,Pabna</h5>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <h3>General Contact</h3>
          <h5>Toll Free: 888-666-1205</h5>
          <h5>Phone: 732-951-145</h5>
          <h5>Fax: 485-102-34 </h5>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <h3>Outdoor an Emergency</h3>
          <h5>Outdoor: 738-666-1205</h5>
          <h5>Ambulance: 452-951-145</h5>
          <h5>Any-Objection: 999</h5>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
