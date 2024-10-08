import React from "react";

const CoCandidates: React.FC = () => {
  return (
    <div>
      <div className="border-b-2 h-16 mb-2 items-center content-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex poppins2 text-2xl justify-start w-96">
            Candidates
          </div>
        </div>
      </div>

      {/* Table Header */}
      <div className="co-candidates-container border-black">
        <div className="co-news-column poppins3 text-left">Name</div>
        <div className="co-news-column poppins3">Date of birth</div>
        <div className="co-news-column poppins3">Position Applied</div>
        <div className="co-news-column poppins3">Curriculum Vitae (CV)</div>
      </div>

      {/* Candidate Information - A Static Line */}
      <div className="co-candidates-container border-black">
        <div className="co-news-column poppins3 text-left">Hoang Minh Duc</div>
        <div className="co-news-column poppins3">20-10-2003</div>
        <div className="co-news-column poppins3">Frontend Developer</div>
        <div className="co-news-column poppins3">
          <a href="#" className="text-blue-500">
            Download CV
          </a>
        </div>
      </div>
      <div className="co-candidates-container border-black">
        <div className="co-news-column poppins3 text-left">
          Nguyen Trong Nguyen
        </div>
        <div className="co-news-column poppins3">08-07-1996</div>
        <div className="co-news-column poppins3">Backend Developer</div>
        <div className="co-news-column poppins3">
          <a href="#" className="text-blue-500">
            Download CV
          </a>
        </div>
      </div>
      <div className="co-candidates-container border-black">
        <div className="co-news-column poppins3 text-left">
          Nguyen Manh Tuan
        </div>
        <div className="co-news-column poppins3">11-12-2000</div>
        <div className="co-news-column poppins3">Designer</div>
        <div className="co-news-column poppins3">
          <a href="#" className="text-blue-500">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoCandidates;
