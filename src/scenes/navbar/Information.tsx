import React, { useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "./Information.css";

// import required modules

const Information: React.FC = () => {
  const [name, setName] = useState("John Doe");
  const [username, setUsername] = useState("johndoe");
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChangeSubmit = () => {
    if (currentPassword) {
      console.log("Password changed to:", newPassword);
      // Reset password fields after submission
      setCurrentPassword("");
      setNewPassword("");
      setShowPasswordChange(false);
    } else {
      alert("Please enter the current password.");
    }
  };

  return (
    <div className="h-screen w-full flex bg-gray-100 mt-14 text-black poppins">
      {/* Container that takes full height and width */}

      {/* Left Column */}
      <div className="w-1/2 bg-white  rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-6">User Information</h1>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full p-3 border rounded-md text-lg"
          />
          <button className="mt-2 text-white bg-blue-500 px-4 py-2 rounded-md">
            Update Name
          </button>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="w-full p-3 border rounded-md text-lg"
          />
          <button className="mt-2 text-white bg-blue-500 px-4 py-2 rounded-md">
            Update Username
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-1/2 bg-white rounded-lg p-8 flex flex-col justify-between h-full">
        <div>
          <h1 className="text-2xl font-semibold mb-6">Password Settings</h1>
          <div className="mb-6">
            <button
              className="text-white bg-blue-500 px-4 py-2 rounded-md"
              onClick={() => setShowPasswordChange(!showPasswordChange)}
            >
              Change Password
            </button>
          </div>

          {showPasswordChange && (
            <div>
              <label className="block text-lg font-medium mb-2">
                Current Password
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full p-3 border rounded-md text-lg mb-4"
                placeholder="Enter current password"
              />

              <label className="block text-lg font-medium mb-2">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-3 border rounded-md text-lg"
                placeholder="Enter new password"
              />

              <button
                onClick={handlePasswordChangeSubmit}
                className="mt-4 text-white bg-green-500 px-4 py-2 rounded-md"
              >
                Submit Password Change
              </button>
            </div>
          )}
          <div className="flex justify-end mt-25">
            <button
              className="text-white bg-red-500 px-4 py-2 rounded-md"
              onClick={() => (window.location.href = "/")}
            >
              Back Home
            </button>
          </div>
        </div>

        {/* Back to homepage button placed at the bottom */}
      </div>
    </div>
  );
};

export default Information;
