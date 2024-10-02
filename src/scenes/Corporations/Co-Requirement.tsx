import React, { useState } from "react";
import "./Co-Requirement.css";

interface RecruitmentRequirement {
  requirementInfo: string;
  numberOfNews: number;
  needs: string;
  dayCreated: string;
  status: string; // New field for status
}

interface CoRecruitmentRequirementsProps {
  requirementList: RecruitmentRequirement[];
  setRequirementList: React.Dispatch<
    React.SetStateAction<RecruitmentRequirement[]>
  >;
}

const CoRecruitmentRequirements: React.FC<CoRecruitmentRequirementsProps> = ({
  requirementList,
  setRequirementList,
}) => {
  const [isRequirementModalOpen, setIsRequirementModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Tracks if we are editing
  const [editingIndex, setEditingIndex] = useState<number | null>(null); // Stores the index of the requirement being edited
  const [requirementFormData, setRequirementFormData] =
    useState<RecruitmentRequirement>({
      requirementInfo: "",
      numberOfNews: 0,
      needs: "",
      dayCreated: "",
      status: "Still Hiring", // Default status
    });

  const handleOpenRequirementModal = () => {
    setIsRequirementModalOpen(true);
    setIsEditing(false); // Ensure the modal is for adding a new requirement by default
  };

  const handleCloseRequirementModal = () => {
    setIsRequirementModalOpen(false);
    setRequirementFormData({
      requirementInfo: "",
      numberOfNews: 0,
      needs: "",
      dayCreated: "",
      status: "Still Hiring", // Reset to default status
    });
  };

  const handleRequirementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequirementFormData({
      ...requirementFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStatusChange = (newStatus: string) => {
    setRequirementFormData({
      ...requirementFormData,
      status: newStatus,
    });
  };

  const handleAddRequirement = () => {
    if (isEditing && editingIndex !== null) {
      // Edit existing requirement
      const updatedList = [...requirementList];
      updatedList[editingIndex] = requirementFormData; // Update the requirement at the selected index
      setRequirementList(updatedList);
    } else {
      // Add new requirement
      setRequirementList([...requirementList, requirementFormData]);
    }
    handleCloseRequirementModal();
  };

  const handleDeleteRequirement = (index: number) => {
    const updatedList = requirementList.filter((_, i) => i !== index);
    setRequirementList(updatedList);
  };

  const handleEditRequirement = (index: number) => {
    setIsEditing(true);
    setEditingIndex(index);
    setRequirementFormData(requirementList[index]); // Populate modal with existing data
    setIsRequirementModalOpen(true); // Open modal for editing
  };

  return (
    <div>
      <div className="border-b-2 h-16 mb-2 items-center content-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex poppins2 text-2xl justify-start w-96">
            Recruitment Requirements
          </div>
          <div className="co-news-add flex items-center">
            <button
              className="co-news-button bg-main text-white poppins2"
              onClick={handleOpenRequirementModal}
            >
              Add
            </button>

            {isRequirementModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                  <h2 className="text-xl font-bold mb-4">
                    {isEditing
                      ? "Edit Recruitment Requirement"
                      : "Add New Recruitment Requirement"}
                  </h2>

                  <input
                    type="text"
                    name="requirementInfo"
                    value={requirementFormData.requirementInfo}
                    onChange={handleRequirementChange}
                    placeholder="Recruitment Requirement"
                    className="w-full border border-gray-300 p-2 rounded-md mb-4"
                  />

                  <input
                    type="number"
                    name="numberOfNews"
                    value={requirementFormData.numberOfNews}
                    onChange={handleRequirementChange}
                    placeholder="Number of Requirement News"
                    className="w-full border border-gray-300 p-2 rounded-md mb-4"
                  />

                  <input
                    type="text"
                    name="needs"
                    value={requirementFormData.needs}
                    onChange={handleRequirementChange}
                    placeholder="Needs"
                    className="w-full border border-gray-300 p-2 rounded-md mb-4"
                  />

                  <input
                    type="text"
                    name="dayCreated"
                    value={requirementFormData.dayCreated}
                    onChange={handleRequirementChange}
                    placeholder="Day Created"
                    className="w-full border border-gray-300 p-2 rounded-md mb-4"
                  />

                  {/* Status Toggle */}
                  <div className="mb-4">
                    <label className="mr-4">Status:</label>
                    <span
                      className={`p-2 rounded-md cursor-pointer ${
                        requirementFormData.status === "Still Hiring"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                      onClick={() =>
                        handleStatusChange(
                          requirementFormData.status === "Still Hiring"
                            ? "Stop Hiring"
                            : "Still Hiring"
                        )
                      }
                    >
                      {requirementFormData.status}
                    </span>
                  </div>

                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    onClick={handleAddRequirement}
                  >
                    {isEditing ? "Save Changes" : "Add"}
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={handleCloseRequirementModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="co-requirement-container border-black">
        <div className="co-news-column poppins3 text-left">
          Recruitment Requirement
        </div>
        <div className="co-news-column poppins3">
          Number of Requirement News
        </div>
        <div className="co-news-column poppins3">Needs</div>
        <div className="co-news-column poppins3">Day Created</div>
        <div className="co-news-column poppins3">Status</div>{" "}
        {/* Added Status */}
        <div className="co-news-column poppins3">Action</div>
      </div>

      {requirementList.map((requirement, index) => (
        <div className="co-requirement-container border-black" key={index}>
          <div className="co-news-column poppins3 text-left">
            {requirement.requirementInfo}
          </div>
          <div className="co-news-column poppins3">
            {requirement.numberOfNews}
          </div>
          <div className="co-news-column poppins3">{requirement.needs}</div>
          <div className="co-news-column poppins3">
            {requirement.dayCreated}
          </div>
          <div className="co-news-column poppins3">
            {/* Show the status */}
            <span
              className={`p-2 rounded-md ${
                requirement.status === "Still Hiring"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {requirement.status}
            </span>
          </div>
          <div className="co-news-column poppins3">
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
              onClick={() => handleEditRequirement(index)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleDeleteRequirement(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoRecruitmentRequirements;
