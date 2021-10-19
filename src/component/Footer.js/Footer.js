import React from "react";
import logo from "./logo.png";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="mb-0">
      <div style={{ backgroundColor: "#0262AC", color: "white" }}>
        <h4 className="py-2 mb-0">
          For Emergencies Please Call Us At (850-753-106)
        </h4>
      </div>
      <div
        style={{ backgroundColor: "black" }}
        className="text-white text-md-start px-5 py3"
      >
        <div className="row footer">
          <div
            style={{ color: "#0262AC" }}
            className="fs-4 col-12  py-3  fw-bolder"
          >
            <img className="mx-1 pb-2 my-auto" src={logo} width="40px" alt="" />
            SHIMLA HOSPITAL
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="footerPart">
              <br />
              <div>
                <h3>About us</h3>
                <p> We provide fast-class services last 14 years. </p>
              </div>
              <br />
              <div>
                <h3>Contact Us</h3>
                <p className="mb-1">
                  {" "}
                  <FontAwesomeIcon
                    className="me-2 text-warning"
                    icon={faPhone}
                  />{" "}
                  96 7541 504 541
                </p>
                <p>
                  <FontAwesomeIcon
                    className="me-2 text-warning"
                    icon={faEnvelope}
                  />{" "}
                  shimlahospital@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="footerPart">
              <h3>Information</h3>
              <NavLink to="/about"> About Us</NavLink>
              <NavLink to="/blogs"> Blogs</NavLink>
              <NavLink to="/home">More Search</NavLink>
              <NavLink to="/events"> Events</NavLink>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="footerPart">
              <h3>Helpful links</h3>
              <NavLink to="/services"> Services</NavLink>
              <NavLink to="/home"> Support</NavLink>
              <NavLink to="/home">Trams & Condition</NavLink>
              <NavLink to="/events"> Privacy Policy</NavLink>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="footerPart">
              <h3>Subscribe More Info</h3>
              <Form.Control
                type="email"
                className="w-75 mx-auto mx-md-0 fs-5 mt-4"
                placeholder="Email"
              />
              <Button className="bg-warning mb-3 fw-bold fs-5 py-1 px-3 rounded-3 mt-3">
                Subscribe
              </Button>
                          <div className="socialLink">
                           
                <a
                  href="https://www.facebook.com/shanto.1953/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-amirul-islam-shanto-9a99a321a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/amirul-isalm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="mailto:amirulislam.shanto.75@gmail.com
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
          <hr style={{ color: "white", height: "3px" }} />
          <div className="col-12 pb-4 text-center">
            <small>Copyright © 2021 Shimla-Hospital.com</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
