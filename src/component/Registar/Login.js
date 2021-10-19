import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useDataAndAuth from "../Context/useDataAndAuth";
import "./Login.css";
import logo from "./logo.png";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [testPass, setTestPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setnewUser] = useState(false);

 const location = useLocation();
 const history = useHistory();
 const Redirect_url = location.state?.from || "/home";

  // import useauth data from  context api

  const { usefirebaseByContext } = useDataAndAuth();
  const {
    user,
    setError,
    setUser,
    error,
    googleSignIn,
    logOut,
    createaccountUsingpass,
    updateData,
    loginUserUsingEmailPass,
    setIsLoading
  } = usefirebaseByContext;

  // click google button

  const ClickGoogleButton = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
       setIsLoading(false);
        setError("Login successfully");

        history.push(Redirect_url);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  // set input field value
  const nameFildValue = (e) => {
    setName(e.target.value);
  };
  const emailFildValue = (e) => {
    setEmail(e.target.value);
  };

  const testPassfildValue = (e) => {
    setTestPass(e.target.value);
  };
  const confirmPassFildValue = (e) => {
    setConfirmPass(e.target.value);
  };
  const alreadyAccount = (e) => {
    setnewUser(e.target.checked);
  };

  // matching two password fild value

  const submitForom = (e) => {
    e.preventDefault();

    if (testPass === confirmPass) {
      setPassword(testPass);
    } else {
      setError("Password doesn't match..");
    }

    if (newUser) {
      createaccountUsingpass(email, password, name)
        .then((result) => {
          setUser(result.user);
          updateData(name);
          setError("Sign Up successfully");
        })
        .catch((error) => {
          setError(error.message);
        });
     
    } else {
      loginUserUsingEmailPass(email, password)
        .then((result) => {
          setUser(result.user);
          setIsLoading(false);
          setError("Login successfully");
          history.push(Redirect_url);
        })
        .catch((error) => {
          setError(error.message);
        });

    }
  };

  return (
    <div className="login-form ">
      <div className="mainForom my-5">
        <div
          style={{ color: "#0262AC" }}
          className="fs-4 py-3  fw-bolder"
          href="#home"
        >
          <img
            className="mx-1 pb-2 my-auto"
            src={logo}
            style={{ width: "55px" }}
            alt=""
          />
          SHIMLA HOSPITAL
        </div>

        <Form onSubmit={submitForom}>
          {newUser && (
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
              <Form.Control
                onBlur={nameFildValue}
                type="text"
                placeholder="name"
              />
            </FloatingLabel>
          )}
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              onBlur={emailFildValue}
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel
            className="mb-3"
            controlId="floatingPassword"
            label="Password"
          >
            <Form.Control
              onBlur={testPassfildValue}
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Confirm Password"
            className="mb-3"
          >
            <Form.Control
              onBlur={confirmPassFildValue}
              type="password"
              placeholder="Confirm Password"
            />
          </FloatingLabel>
          <span>{error}</span>
          <br />
          {newUser ? (
            <Button className="submitbtn" type="submit">
              Signup
            </Button>
          ) : (
            <Button className="submitbtn" type="submit">
              Login
            </Button>
          )}

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col className="pt-3 text-start">
              <Form.Check
                onChange={alreadyAccount}
                label="New User? Please Signup (Click for change forom)"
              />
            </Col>
          </Form.Group>
          <h6>------Or, Login with------</h6>
          <Button onClick={ClickGoogleButton} className="google">
            <FontAwesomeIcon icon={faGoogle} />
            oogle
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
