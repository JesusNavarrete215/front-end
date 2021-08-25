import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "./../actions";

import StyledLogin from "../styledComponents/StyledLogin";

const initialState = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [formValue, setFormValue] = useState(initialState);
  const { authorization } = props;

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    console.log(authorization);
  };

  return (
    <StyledLogin>
      <div className="img-box">
        <img
          src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"
          alt="alt text"
        />
      </div>
      <div className="content-box">
        <div className="form-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <span>Username</span>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
                value={formValue.username}
              />
            </div>
            <div className="input-box">
              <span>Password</span>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={formValue.password}
              />
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
            </div>
            <div className="input-box">
              <button className="button">Login</button>
            </div>
            <div className="input-box">
              <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </StyledLogin>
  );
};

const mapStateToProps = (state) => {
  return {
    authorization: state.authorization,
  };
};

export default connect(mapStateToProps, { login })(Login);
