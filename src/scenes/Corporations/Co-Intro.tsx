import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/usthlogo.png";
import "./Co-Intro.css";

const CoIntro: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/cologin");
  };
  const handleSignup = () => {
    navigate("/cosignup");
  };
  return (
    <div className="">
      <div className="co-intro-background object-contai ">
        <div className=" h-screen">
          <div className=" co-nav">
            <div className="flex co-intro-nav bg-white">
              <div className="flex lg:flex-1 PHANLOGOUSTH ml-5">
                <a href="/home" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-16 w-auto" src={logo} alt="" />
                </a>
              </div>
              <button
                className="co-nav-login bg-main text-white poppinsregular"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className="co-nav-login1 bg-white text-black border-main co-intro-button"
                onClick={handleSignup}
              >
                <p>SignUp</p>
              </button>
            </div>
            <div className=" h-500 co-content">
              <div className="text-4xl  w-700 mt-25">
                <p className="text-white">
                  Find the{" "}
                  <span className="poppins3 text-main"> MOST SUITABLE </span>
                  candicates for your corporation!
                </p>
              </div>

              <button
                className=" co-startnow bg-main text-white text-xl mt-5"
                onClick={handleLogin}
              >
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoIntro;
