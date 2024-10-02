import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const CoCompany: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigating between routes

  const handleClick = () => {
    navigate("/cohome"); // Navigate to /cohome when the div is clicked
  };

  return (
    <div
      className="bg-white p-4 shadow-md rounded-lg w-80 m-4 cursor-pointer" // Added margin and pointer cursor for better UX
      onClick={handleClick} // Click handler to navigate
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500 text-white h-12 w-12 flex items-center justify-center rounded-full">
            H
          </div>
          <div>
            <h2 className="text-xl font-bold">HAGG</h2>
            <p className="text-gray-500 text-sm">Dưới 10</p>
          </div>
        </div>
        <div className="text-gray-400 cursor-pointer">...</div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-red-500">2 thông báo</p>
        <a href="#" className="text-blue-500">
          hagg.iviec.vn
        </a>
      </div>

      <div className="text-right mt-4 text-gray-400">676</div>
    </div>
  );
};

export default CoCompany;
