import React, { useState } from "react";

const AdNews: React.FC = () => {
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
    <div className="p-5">
      <table className="min-w-full border-collapse border border-gray-300 ">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-center">
              Recruitment News
            </th>
            <th className="border border-gray-300 p-2">Activity</th>
          </tr>
        </thead>
        <tbody>
          {recruitmentData.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 p-2">{item.name}</td>
              <td className="border border-gray-300 p-2 flex justify-center align-middle">
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdNews;
