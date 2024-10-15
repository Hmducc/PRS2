import React, { useState } from "react";

const AdRequirement: React.FC = () => {
  // Sample recruitment requirements data
  const [recruitmentData, setRecruitmentData] = useState([
    { id: 1, name: "Frontend Developer" },
    { id: 2, name: "Backend Developer" },
    { id: 3, name: "Full Stack Engineer" },
    { id: 4, name: "Product Manager" },
  ]);

  // Function to handle delete
  const handleDelete = (id: number) => {
    const updatedData = recruitmentData.filter((item) => item.id !== id);
    setRecruitmentData(updatedData);
  };

  return (
    <div className="p-5 bg-blue-100">
      {recruitmentData.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition duration-200"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdRequirement;
