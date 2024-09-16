// JobCard.tsx
import { Bookmark32Regular } from "@fluentui/react-icons";
import React from "react";
import "./JobCard.css";

interface JobCardProps {
  title: string;
  company: string;
  salary: string;
  imageUrl: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  salary,
  imageUrl,
}) => {
  return (
    <div className="border rounded-md p-5 bg-white  flex-col justify-between card ">
      <div className="flex items-center mt-3">
        <img
          src={imageUrl}
          alt={company}
          className="w-20 h-20 object-cover ml-3 mr-4"
        />
        <div className="ml-6">
          <h3 className="text-xl font-semibold text-black  ">{title}</h3>
          <p className="text-gray-400 text-md">{company}</p>
        </div>
        <div className="ml-32 mb-3 ">
          <Bookmark32Regular className="text-blue-500 "></Bookmark32Regular>
        </div>
      </div>
      <div className=" ml-3 mt-14 flex justify-between items-center ">
        <span className="text-main  px-2 py-1 rounded-lg bg-blue-200">
          {salary}
        </span>
        <button className="text-main border border-blue-400 px-4 py-1 rounded-full hover:bg-blue-200">
          Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
