import type { CheckboxProps } from "antd";
import { Checkbox, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const Login: React.FC = () => {
  return (
    <div className="main">
      <div className="blur1 ">
        <div className="login ">
          <div className="">
            <h2 className="login-title poppins ">Sign in</h2>
            <div className="inside  ">
              <form className="login-form">
                <div className="form-group">
                  <h1 className="logintext poppins2">Email or phone number</h1>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <h1 className="logintext poppins2">Password</h1>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="input"
                  />
                </div>

                <button type="submit" className="login-button poppins bg-main">
                  Sign in
                </button>
                <div className="tick">
                  <Checkbox onChange={onChange} className="checkbox poppins">
                    Remember me
                  </Checkbox>
                  <h1 className="help poppins">Need help?</h1>
                </div>
              </form>
            </div>
          </div>
          <div className="signup-inlogin">
            <h1 className="acc poppins">
              Don't have an account?{" "}
              <Link to="/signup" className="signup-link text-main poppins3">
                Sign Up
              </Link>
            </h1>
          </div>
          <div className="signup2">
            <h1 className=" poppins captcha">
              {" "}
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
