import './Signup.css'
import img1 from './img/img1.png';
// import { Link } from "react-router-dom";
import '../../assets/css/w3.css'

import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../../services/auth-service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  console.log(value)
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div class="w3-container">
      <div id="id01" class="signup_container" >
        <div class="w3-modal-content w3-card-4 w3-animate-zoom signup_modal">
        <div class="w3-center"><br></br>
            <span class="w3-button w3-xlarge w3-transparent w3-display-topright" title="Close Modal">×</span>
            <img src={img1} alt="" class="w3-circle w3-margin-top login_img" />
          </div>
          <Form onSubmit={handleRegister} ref={form} class="w3-container" >
            {!successful && (
              <div class="w3-section">
                <Input
                  type="text"
                  className="w3-input w3-border w3-margin-bottom"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
                <Input
                  type="text"
                  className="w3-input w3-border w3-margin-bottom"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
                <Input
                  type="password"
                  className="w3-input w3-border"
                  name="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
                <button class="w3-button w3-block w3-green w3-section w3-padding" >Register</button>
              </div>
            )}
            {message && (
              <div className="form-group">
                <div
                  className={successful ? "alert alert-success" : "alert alert-danger"}
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
          <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
            <button type="button" class="w3-button w3-red">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
