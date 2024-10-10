// JobDetails.tsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  UserOutlined,
  AppstoreOutlined,
  DollarCircleOutlined,
  FieldTimeOutlined,
  ManOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const JobDetails: React.FC = () => {
  const location = useLocation();
  const { title, company, salary, imageUrl } = location.state;

  const jobDetails = {
    candidateQuantity: 5,
    job: "Frontend Developer",
    position: "Mid-Level",
    jobDescription:
      "Develop and maintain web applications using React, ensuring UI/UX consistency and performance optimization.",
    requirement: "Proficient in React, JavaScript, HTML, and CSS.",
    benefit: "Health insurance, Annual Bonus, Paid Leave.",
    workingForm: "Full-time, Remote",
    level: "Mid-level",
    salaryStart: "15,000,000 VND",
    salaryEnd: "25,000,000 VND",
    yearOfExperience: "3-5 years",
    gender: "Any",
    language: "English",
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleApplyClick = () => {
    setIsFormVisible(true);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process form submission here (e.g., send to backend)
    console.log("Form submitted");
    // Optionally, you can reset the form and hide it after submission
  };

  return (
    <div className="job-details-container bg-white text-black mt-25 p-6">
      <div className="header flex items-center space-x-6">
        <img
          src={imageUrl}
          alt={company}
          className="w-24 h-24 object-cover rounded-md"
        />
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-lg text-gray-600">{company}</p>
          <p className="text-blue-600 font-semibold">{salary}</p>
        </div>
      </div>

      <div className="job-details-content grid grid-cols-2 gap-6 mt-8 text-lg">
        <div>
          <UserOutlined className="text-xl text-blue-500 mr-2" />
          <strong>Job:</strong> {jobDetails.job}
        </div>
        <div>
          <AppstoreOutlined className="text-xl text-blue-500 mr-2" />
          <strong>Position:</strong> {jobDetails.position}
        </div>
        <div>
          <FieldTimeOutlined className="text-xl text-blue-500 mr-2" />
          <strong>Candidate Quantity:</strong> {jobDetails.candidateQuantity}
        </div>
        <div>
          <DollarCircleOutlined className="text-xl text-blue-500 mr-2" />
          <strong>Salary:</strong> {jobDetails.salaryStart} -{" "}
          {jobDetails.salaryEnd}
        </div>
        <div>
          <UserOutlined className="text-xl text-blue-500 mr-2" />
          <strong>Years of Experience:</strong> {jobDetails.yearOfExperience}
        </div>
        <div>
          <ManOutlined className="text-xl text-blue-500 mr-2" />
          <strong>Gender:</strong> {jobDetails.gender}
        </div>
        <div>
          <GlobalOutlined className="text-xl text-blue-500 mr-2" />
          <strong>Language:</strong> {jobDetails.language}
        </div>
        <div>
          <strong>Working Form:</strong> {jobDetails.workingForm}
        </div>
        <div>
          <strong>Job Description:</strong> {jobDetails.jobDescription}
        </div>
        <div>
          <strong>Requirements:</strong> {jobDetails.requirement}
        </div>
        <div>
          <strong>Benefits:</strong> {jobDetails.benefit}
        </div>
      </div>

      {/* Apply Button */}
      {!isFormVisible && (
        <button
          className="mt-6 bg-blue-500 text-white px-6 py-2 rounded"
          onClick={handleApplyClick}
        >
          Apply Now
        </button>
      )}

      {/* Application Form */}
      {isFormVisible && (
        <div className="apply-form mt-6 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Application Form</h3>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              required
            />
            <input
              type="text"
              placeholder="Date of Birth"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              required
            />
            <input
              type="text"
              placeholder="Place"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              required
            />
            <label className="block mb-2 text-sm">Upload CV</label>
            <input
              type="file"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              required
            />
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setIsFormVisible(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
