import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFound">
      <div>
        <img
          className="mx-auto"
          src="https://www.argildx.com/wp-content/uploads/2017/06/Is-a-Misconfigured-%E2%80%9CPage-Not-Found%E2%80%9D-Jeopardizing-Your-Website.jpg"
          alt=""
        />

        <br />
        <br />

        <Link className="mx-auto" to="/home">
          <button className="backHome">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
