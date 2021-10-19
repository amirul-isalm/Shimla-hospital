import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./Header.css";
import useDataAndAuth from "../Context/useDataAndAuth";
const Header = () => {
  const { usefirebaseByContext } = useDataAndAuth();
  const { user, logOut } = usefirebaseByContext;
  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            style={{ color: "#0262AC" }}
            className="fs-4   fw-bolder"
            href="#home"
          >
            <img className="mx-1 pb-2 my-auto" src={logo} width="40px" alt="" />
            SHIMLA HOSPITAL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                className="mx-md-4 my-auto"
                activeStyle={{ color: "red" }}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="mx-md-4 my-auto"
                activeStyle={{ color: "red" }}
                to="/blogs"
              >
                Blogs
              </NavLink>

              <NavLink
                className="mx-md-4 my-auto"
                activeStyle={{ color: "red" }}
                to="/contact"
              >
                Contact Us
              </NavLink>
            </Nav>

            {user.displayName ? (
              <div style={{ display: "flex" }}>
                <div>
                  <img
                    style={{ width: "50px ", borderRadius: "50%" }}
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                <h5 className="my-auto">{user.displayName}</h5>
                <button
                  onClick={logOut}
                  className="py-1 px-3 rounded-3 fw-bold ms-3 bg-info "
                >
                  Log Out
                </button>
              </div>
            ) : (
              <NavLink
                className="mx-md-4 bg-info py-1 px-3 rounded-3 my-2 "
                activeStyle={{ color: "red" }}
                to="/login"
              >
                Login
              </NavLink>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
