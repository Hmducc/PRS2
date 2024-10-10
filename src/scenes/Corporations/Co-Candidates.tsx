import React, { useState } from "react";
import "./Co-News.css";

const CoCandidates: React.FC = () => {
  const [selectedCandidateCV, setSelectedCandidateCV] = useState<string | null>(
    null
  );

  const candidates = [
    {
      name: "Hoang Minh Duc",
      dob: "20-10-2003",
      email: "hoangminhduc@example.com",
      phoneNumber: "0123-456-789",
      job: "Frontend Developer",
      cvImageUrl:
        "https://via.placeholder.com/600x800.png?text=CV+Hoang+Minh+Duc", // Placeholder image URL
    },
    {
      name: "Nguyen Trong Nguyen",
      dob: "08-07-1996",
      email: "nguyentrongnguyen@example.com",
      phoneNumber: "0987-654-321",
      job: "Backend Developer",
      cvImageUrl:
        "https://via.placeholder.com/600x800.png?text=CV+Nguyen+Trong+Nguyen", // Placeholder image URL
    },
    {
      name: "Nguyen Manh Tuan",
      dob: "11-12-2000",
      email: "nguyenmanhtuan@example.com",
      phoneNumber: "0912-345-678",
      job: "Designer",
      cvImageUrl:
        "https://via.placeholder.com/600x800.png?text=CV+Nguyen+Manh+Tuan", // Placeholder image URL
    },
  ];

  // Handler to open CV in modal
  const handleCVClick = (cvImageUrl: string) => {
    setSelectedCandidateCV(cvImageUrl);
  };

  // Handler to close modal
  const handleCloseModal = () => {
    setSelectedCandidateCV(null);
  };

  return (
    <div>
      <div className="border-b-2 h-16 mb-2 items-center content-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex poppins2 text-2xl justify-start w-96">
            Candidates
          </div>
        </div>
      </div>

      {/* Scrollable Table Container */}
      <div className="overflow-x-auto">
        <div className="min-w-[1000px]">
          {" "}
          {/* Set minimum width to ensure horizontal scrolling */}
          {/* Table Header */}
          <div className="co-candidates-container border-black flex">
            <div className="co-news-column poppins3 text-left w-48">Name</div>
            <div className="co-news-column poppins3 w-48">Date of Birth</div>
            <div className="co-news-column  poppins3 w-64">Email</div>
            <div className="co-news-column poppins3 w-48">Phone Number</div>
            <div className="co-news-column poppins3 w-48">Job</div>
            <div className="co-news-column poppins3 w-32">CV</div>
          </div>
          {/* Candidate Information */}
          {candidates.map((candidate, index) => (
            <div
              className="co-candidates-container border-black flex"
              key={index}
            >
              <div className="co-news-column poppins3 text-left w-48">
                {candidate.name}
              </div>
              <div className="co-news-column poppins3 w-48">
                {candidate.dob}
              </div>
              <div className="co-news-column poppins3 w-64">
                {candidate.email}
              </div>
              <div className="co-news-column poppins3 w-48">
                {candidate.phoneNumber}
              </div>
              <div className="co-news-column poppins3 w-48">
                {candidate.job}
              </div>
              <div className="co-news-column poppins3 w-32">
                <button
                  onClick={() => handleCVClick(candidate.cvImageUrl)}
                  className="text-blue-500"
                >
                  View CV
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying CV */}
      {selectedCandidateCV && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-4 text-red-500 text-3xl font-bold"
              onClick={handleCloseModal}
            >
              &times;
            </button>

            {/* Image display (80% of viewport height) */}
            <div className="flex justify-center items-center">
              <img
                src={selectedCandidateCV}
                alt="Candidate CV"
                className="max-h-[80vh] w-auto" // Takes up 80% of viewport height
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoCandidates;
