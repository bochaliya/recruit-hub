import img1 from '../images/img1.png';
import '../css/w3.css'


import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
//import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth-service";
import { NavLink } from 'react-router-dom';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          props.history.push("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="w3-container">
      <div id="id01" className="login_container" >
        <div className="w3-modal-content w3-card-4 w3-animate-zoom login_modal">
          <div className="w3-center"><br></br>
            <span className="w3-button w3-xlarge w3-transparent w3-display-topright" title="Close Modal">×</span>
            <img src={img1} alt="" className="w3-circle w3-margin-top login_img" />
          </div>
          <Form className="w3-container w3-large" onSubmit={handleLogin} ref={form} >
            <div className="w3-section">
              <input value={username} onChange={onChangeUsername} validations={[required]} className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Enter Username" name="username" />
              <input value={password} onChange={onChangePassword} validations={[required]} className="w3-input w3-border" type="password" placeholder="Enter Password" name="password" />
              <button className="w3-button w3-block w3-green w3-section w3-padding" disabled={loading}>
                {loading && (<span className="spinner-border spinner-border-sm"></span>)}
                <span>Login</span>
              </button>
              <input className="w3-check w3-margin-top" type="checkbox" checked="checked" /> Remember me
            </div>
            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
          <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
            <button type="button" className="w3-button w3-red">Cancel</button>
            <span className="w3-right w3-padding w3-hide-small">Forgot <NavLink to="/">password?</NavLink></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
