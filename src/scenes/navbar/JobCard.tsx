// JobCard.tsx
import { Bookmark32Regular } from "@fluentui/react-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./JobCard.css";

interface JobCardProps {
  id: number;
  title: string;
  company: string;
  salary: string;
  imageUrl: string;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  company,
  salary,
  imageUrl,
}) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/job/${id}`, { state: { title, company, salary, imageUrl } });
  };

  return (
    <div className="border rounded-lg p-6 bg-white shadow-lg flex-col justify-between card transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <div className="flex items-center mt-3">
        <img
          src={imageUrl}
          alt={company}
          className="w-24 h-24 object-cover rounded-md shadow-md"
        />
        <div className="ml-6 flex-1">
          <h3 className="text-2xl font-semibold text-black">{title}</h3>
          <p className="text-gray-500 text-lg">{company}</p>
        </div>
        <div className="ml-auto mb-3">
          <Bookmark32Regular className="text-blue-500 text-xl cursor-pointer hover:text-blue-600" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <span className="text-blue-600 font-semibold px-3 py-1 rounded-lg bg-blue-100 text-lg">
          {salary}
        </span>
        <button
          className="text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full font-medium transition-colors duration-300"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
