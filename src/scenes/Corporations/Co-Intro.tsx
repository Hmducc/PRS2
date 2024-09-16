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
    <div className="bg-red-300 h-1300">
      <div className="bg-green-300 h-screen">
        <div className="bg-blue-300 co-nav">
          <div className="flex">
            <div>
              <img className="h-16 w-100 bg-green-300 ml-5 " src={logo} />
            </div>
            <button
              className="co-nav-login bg-main text-white poppinsregular"
              onClick={handleLogin}
            >
              Login
            </button>
            <button className="co-nav-login1 text-black" onClick={handleSignup}>
              <p>SignUp</p>
            </button>
          </div>
          <div className="bg-yellow-300 h-500 co-content">
            <div className="text-4xl mt-5 bg-pink-300 w-700">
              <p>
                Find the <span className="poppins3"> MOST SUITABLE </span>
                candicates for your corporation!
              </p>
            </div>
            <div className=" co-startnow bg-main text-white text-xl mt-12">
              <p>Start now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoIntro;
