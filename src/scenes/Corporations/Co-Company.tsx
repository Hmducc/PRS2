import React, { useState } from "react";
import { Modal, Input } from "antd"; // Ant Design for Modal and Input
import { useNavigate } from "react-router-dom";

interface Company {
  name: string;
  people: number;
  url: string;
}

const CoCompany: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigating between routes

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
  const [companies, setCompanies] = useState<Company[]>([]); // State to store the list of companies
  const [formData, setFormData] = useState<Company>({
    name: "",
    people: 0,
    url: "",
  }); // Form data for the new company

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission and adding a new company
  const handleAddCompany = () => {
    setCompanies([...companies, formData]); // Add the new company to the list
    setFormData({ name: "", people: 0, url: "" }); // Reset the form data
    setIsModalOpen(false); // Close the modal
  };

  // Open modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    navigate("/cohome"); // Navigate to /cohome when the div is clicked
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg m-4"
        onClick={showModal}
      >
        Add Company
      </button>

      {/* Modal for adding a new company */}
      <Modal
        title="Add New Company"
        visible={isModalOpen}
        onOk={handleAddCompany}
        onCancel={handleCancel}
      >
        <div className="mb-4">
          <label className="block text-gray-700">Company Name:</label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter company name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Number of People:</label>
          <Input
            type="number"
            name="people"
            value={formData.people}
            onChange={handleChange}
            placeholder="Enter number of people"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Company URL:</label>
          <Input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Enter company URL"
          />
        </div>
      </Modal>

      {/* Rendering the list of company cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-lg w-80 m-4 cursor-pointer"
            onClick={handleClick}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 text-white h-12 w-12 flex items-center justify-center rounded-full">
                  {company.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{company.name}</h2>
                  <p className="text-gray-500 text-sm">Dưới {company.people}</p>
                </div>
              </div>
              <div className="text-gray-400 cursor-pointer">...</div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-red-500">{company.people} people</p>
              <a
                href={company.url}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.url}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoCompany;
