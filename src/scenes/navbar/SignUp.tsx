// Company.tsx
import { Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp: React.FC = () => {
  return (
    <div className="main">
      <div className="lefthalf"></div>
      <div className="righthalf">
        <div className="signup">
          <div>
            <h1 className="signup-title poppins">Create an account</h1>
            <div className="login-insignup1">
              <h1 className="acc1 poppins">
                Already have an account?{" "}
                <Link to="/login" className="login-link text-main poppins3">
                  Login
                </Link>
              </h1>
            </div>
          </div>
          <div className="inside2">
            <form className="signup-form">
              <div className="form-group2">
                <h1 className="signuptext poppins2">Username</h1>
                <Input
                  type="username"
                  id="username"
                  name="username"
                  required
                  className="input"
                />
              </div>
              <div className="form-group2">
                <h1 className="signuptext poppins2">Email Address</h1>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input"
                />
              </div>
              <div className="form-group2">
                <h1 className="signuptext poppins2">Password</h1>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="input"
                />
                <h1 className="signuptext poppins2">
                  Use 8 or more character with a mix of letters, numbers &
                  symbols
                </h1>
                <h1 className="poppins2 signuptext mt-10">
                  By creating an account, you agree to the Terms of use and
                  Privacy Policy.
                </h1>
              </div>
              <button
                type="submit"
                className="signup-button poppins mt-10  bg-main"
              >
                Create an account
              </button>
              <h1 className="acc1 poppins mt-5">
                Already have an account?{" "}
                <Link to="/login" className="login-link text-main poppins3">
                  Login
                </Link>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
