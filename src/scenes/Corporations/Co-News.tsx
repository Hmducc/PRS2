import React, { useState } from "react";
import "./Co-News.css";
interface RecruitmentData {
  recruitmentInfo: string;
  candidates: string;
  time: string;
  position: string;
  status: string; // New status field
}

interface CoRecruitmentNewsProps {
  recruitmentList: RecruitmentData[];
  setRecruitmentList: React.Dispatch<React.SetStateAction<RecruitmentData[]>>;
}

const CoRecruitmentNews: React.FC<CoRecruitmentNewsProps> = ({
  recruitmentList,
  setRecruitmentList,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Whether we are editing an existing item
  const [editingIndex, setEditingIndex] = useState<number | null>(null); // The index of the item we are editing
  const [formData, setFormData] = useState<RecruitmentData>({
    recruitmentInfo: "",
    candidates: "",
    time: "",
    position: "",
    status: "Still Hiring", // Default status
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsEditing(false); // Default to adding a new item
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      recruitmentInfo: "",
      candidates: "",
      time: "",
      position: "",
      status: "Still Hiring", // Reset the status to default
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStatusChange = (newStatus: string) => {
    setFormData({ ...formData, status: newStatus });
  };

  const handleAddNews = () => {
    if (isEditing && editingIndex !== null) {
      // Update existing recruitment news
      const updatedList = [...recruitmentList];
      updatedList[editingIndex] = formData; // Update the edited item
      setRecruitmentList(updatedList);
    } else {
      // Add new recruitment news
      setRecruitmentList([...recruitmentList, formData]);
    }

    handleCloseModal();
  };

  const handleDeleteNews = (index: number) => {
    const updatedList = recruitmentList.filter((_, i) => i !== index);
    setRecruitmentList(updatedList);
  };

  const handleEditNews = (index: number) => {
    setIsEditing(true);
    setEditingIndex(index); // Set the index of the item being edited
    setFormData(recruitmentList[index]); // Populate the form with the selected item's data
    setIsModalOpen(true); // Open the modal
  };

  return (
    <div>
      <div className="border-b-2 h-16 mb-2 items-center content-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex poppins2 text-2xl justify-start w-96">
            Recruitment News
          </div>
          <div className="co-news-add flex items-center">
            <button
              className="co-news-button bg-main text-white poppins2"
              onClick={handleOpenModal}
            >
              Add
            </button>

            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                  <h2 className="text-xl font-bold mb-4">
                    {isEditing
                      ? "Edit Recruitment Information"
                      : "Add New Recruitment Information"}
                  </h2>

                  <input
                    type="text"
                    name="recruitmentInfo"
                    value={formData.recruitmentInfo}
                    onChange={handleChange}
                    placeholder="Recruitment Information"
                    className="w-full border border-gray-300 p-2 rounded-md mb-4"
                  />

                  <input
                    type="text"
                    name="candidates"
                    value={formData.candidates}
                    onChange={handleChange}
                    placeholder="Number of Candidates"
                    className="w-full border border-gray-300 p-2 rounded-md mb-4"
                  />

                  <input
                    type="text"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    placeholder="Recruitment Time"
                    className="w-full border border-gray-300 p-2 rounded-md mb-4"
                  />

                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Position"
                    className="w-full border border-gray-300 p-2 rounded-md mb-4"
                  />

                  {/* Status Toggle */}
                  <div className="mb-4">
                    <label className="mr-4">Status:</label>
                    <span
                      className={`p-2 rounded-md cursor-pointer ${
                        formData.status === "Still Hiring"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                      onClick={() =>
                        handleStatusChange(
                          formData.status === "Still Hiring"
                            ? "Stop Hiring"
                            : "Still Hiring"
                        )
                      }
                    >
                      {formData.status}
                    </span>
                  </div>

                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    onClick={handleAddNews}
                  >
                    {isEditing ? "Save Changes" : "Add"}
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="co-news-container border-black">
        <div className="co-news-column poppins3 text-left">
          Recruitment Information
        </div>
        <div className="co-news-column poppins3">Number of candidates</div>
        <div className="co-news-column poppins3">Recruitment time</div>
        <div className="co-news-column poppins3">Position</div>
        <div className="co-news-column poppins3">Status</div>
        <div className="co-news-column poppins3">Action</div>
      </div>

      {recruitmentList.map((info, index) => (
        <div className="co-news-container border-black" key={index}>
          <div className="co-news-column poppins3 text-left">
            {info.recruitmentInfo}
          </div>
          <div className="co-news-column poppins3">{info.candidates}</div>
          <div className="co-news-column poppins3">{info.time}</div>
          <div className="co-news-column poppins3">{info.position}</div>
          <div className="co-news-column poppins3">
            <span
              className={`p-2 rounded-md ${
                info.status === "Still Hiring"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {info.status}
            </span>
          </div>
          <div className="co-news-column poppins3">
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
              onClick={() => handleEditNews(index)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleDeleteNews(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoRecruitmentNews;
