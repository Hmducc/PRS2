import React, { useState } from "react";
import { Input, Button } from "antd"; // Ant Design for Input and Button
import { UploadOutlined } from "@ant-design/icons";

interface UserInfo {
  name: string;
  email: string;
  bio: string;
  profilePicture: string | null;
}

const EditInformationScreen: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    email: "",
    bio: "",
    profilePicture: null, // Store the image URL or base64 string
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null); // Store the selected image file
  const [previewImage, setPreviewImage] = useState<string | null>(null); // Store image preview

  // Handle input field changes (for name, email, bio)
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string); // Set the image preview
      };
      reader.readAsDataURL(file); // Convert the image file to base64
    }
  };

  // Simulate saving the changes
  const handleSaveChanges = () => {
    console.log("Saved user info:", userInfo);
    if (selectedImage) {
      console.log("Uploaded image:", selectedImage);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white border-solid p-6 shadow-lg rounded-lg mt-20">
      <h2 className="text-2xl font-bold mb-4">Edit Your Information</h2>

      {/* Profile Picture Upload */}
      <div className="mb-6">
        <label className="block text-gray-700">Profile Picture:</label>
        <div className="flex items-center space-x-4 mt-2">
          {previewImage ? (
            <img
              src={previewImage}
              alt="Profile Preview"
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          <Button
            icon={<UploadOutlined />}
            className="ml-4"
            onClick={() => document.getElementById("profilePicUpload")?.click()}
          >
            Upload Image
          </Button>
          <input
            id="profilePicUpload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
      </div>

      {/* Name Input */}
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <Input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
        <Input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
      </div>

      {/* Bio Input */}
      <div className="mb-4">
        <label className="block text-gray-700">Bio:</label>
        <textarea
          name="bio"
          value={userInfo.bio}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Write a short bio"
        />
      </div>

      {/* Save Button */}
      <Button type="primary" className="w-full" onClick={handleSaveChanges}>
        Save Changes
      </Button>
    </div>
  );
};

export default EditInformationScreen;
