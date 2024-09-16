import React from "react";
import logo from "../../assets/usthlogo.png";
import "./Co-Home.css";

const CoHome: React.FC = () => {
  return (
    <div className="bg-red-300 h-1300">
      <div className="bg-green-300 h-screen">
        <div className="bg-blue-300 co-nav">
          <div className="flex">
            <div>
              <img className="h-16 w-100 bg-green-300 ml-5 " src={logo} />
            </div>
            <div className="co-nav-login ">
              <p className="poppinsregular text-">Login</p>
            </div>
            <div className="co-nav-login1 ">
              <p>SignUp</p>
            </div>
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

export default CoHome;
