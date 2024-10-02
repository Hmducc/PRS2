import { FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { AddCircleRegular, NewsRegular } from "@fluentui/react-icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./Co-Home.css";
import React, { useState } from "react";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

// Define the type for the recruitment form data
interface RecruitmentData {
  recruitmentInfo: string;
  candidates: string;
  time: string;
  position: string;
}

// Define the type for recruitment requirements
interface RecruitmentRequirement {
  requirementInfo: string;
  numberOfNews: number;
  needs: string;
  dayCreated: string;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    "Recruitment Requirements",
    "Recruitment Requirements",
    <NewsRegular />
  ),
  getItem("Recruitment News", "Recruitment News", <NewsRegular />),
  getItem("Add", "Add", <AddCircleRegular />),
  getItem("Candidates", "Candidates", <UserOutlined />),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Log Out", "9", <FileOutlined />),
];

const CoHome: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("Recruitment Requirements"); // Ensure it matches one of the keys
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal handling
  const [isRequirementModalOpen, setIsRequirementModalOpen] = useState(false);

  // Define the form data state with the RecruitmentData type
  const [formData, setFormData] = useState<RecruitmentData>({
    recruitmentInfo: "",
    candidates: "",
    time: "",
    position: "",
  });

  // Define the recruitment requirements state
  const [requirementFormData, setRequirementFormData] =
    useState<RecruitmentRequirement>({
      requirementInfo: "",
      numberOfNews: 0,
      needs: "",
      dayCreated: "",
    });

  // Define the recruitment list state, which is an array of RecruitmentData
  const [recruitmentList, setRecruitmentList] = useState<RecruitmentData[]>([]);

  // Define the recruitment requirements list state
  const [requirementList, setRequirementList] = useState<
    RecruitmentRequirement[]
  >([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenRequirementModal = () => {
    setIsRequirementModalOpen(true);
  };

  const handleCloseRequirementModal = () => {
    setIsRequirementModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRequirementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequirementFormData({
      ...requirementFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddNews = () => {
    setRecruitmentList([...recruitmentList, formData]); // Add the new recruitment info to the list
    setFormData({
      recruitmentInfo: "",
      candidates: "",
      time: "",
      position: "",
    }); // Reset form after adding
    handleCloseModal(); // Close modal after form submission
  };

  const handleAddRequirement = () => {
    setRequirementList([...requirementList, requirementFormData]); // Add the new recruitment requirement to the list
    setRequirementFormData({
      requirementInfo: "",
      numberOfNews: 0,
      needs: "",
      dayCreated: "",
    }); // Reset form after adding
    handleCloseRequirementModal(); // Close modal after form submission
  };

  // Function to delete a recruitment entry based on its index
  const handleDeleteNews = (index: number) => {
    const updatedList = recruitmentList.filter((_, i) => i !== index); // Filter out the entry at the specified index
    setRecruitmentList(updatedList); // Update the state with the new list
  };

  // Function to delete a recruitment requirement entry based on its index
  const handleDeleteRequirement = (index: number) => {
    const updatedList = requirementList.filter((_, i) => i !== index); // Filter out the entry at the specified index
    setRequirementList(updatedList); // Update the state with the new list
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onMenuSelect = ({ key }: { key: string }) => {
    setSelectedKey(key);
  };

  // Render different content based on the selected sidebar item
  const renderContent = () => {
    switch (selectedKey) {
      case "Recruitment Requirements":
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

                  {/* Modal for Recruitment Requirements */}
                  {isRequirementModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-bold mb-4">
                          Add New Recruitment Requirement
                        </h2>

                        {/* Form inputs */}
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

                        {/* Submit Button */}
                        <button
                          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                          onClick={handleAddRequirement}
                        >
                          Add
                        </button>

                        {/* Close Button */}
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

            {/* Recruitment Requirements Table */}
            <div className="co-news-container border-black">
              <div className="co-news-column poppins3 text-left">
                Recruitment Requirement
              </div>
              <div className="co-news-column poppins3">
                Number of Requirement News
              </div>
              <div className="co-news-column poppins3">Needs</div>
              <div className="co-news-column poppins3">Day Created</div>
              <div className="co-news-column poppins3">Action</div>
            </div>

            {/* Render the list of recruitment requirements */}
            {requirementList.map((requirement, index) => (
              <div className="co-news-container border-black" key={index}>
                <div className="co-news-column poppins3 text-left">
                  {requirement.requirementInfo}
                </div>
                <div className="co-news-column poppins3">
                  {requirement.numberOfNews}
                </div>
                <div className="co-news-column poppins3">
                  {requirement.needs}
                </div>
                <div className="co-news-column poppins3">
                  {requirement.dayCreated}
                </div>
                <div className="co-news-column poppins3">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDeleteRequirement(index)} // Call the delete function when clicked
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      case "Recruitment News":
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

                  {/* Modal (popup) */}
                  {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-xl font-bold mb-4">
                          Add New Recruitment Information
                        </h2>

                        {/* Form inputs */}
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

                        {/* Submit Button */}
                        <button
                          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                          onClick={handleAddNews}
                        >
                          Add
                        </button>

                        {/* Close Button */}
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

            {/* Recruitment Table */}
            <div className="co-news-container border-black">
              <div className="co-news-column poppins3 text-left">
                Recruitment Information
              </div>
              <div className="co-news-column poppins3">
                Number of candidates
              </div>
              <div className="co-news-column poppins3">Recruitment time</div>
              <div className="co-news-column poppins3">Position</div>
              <div className="co-news-column poppins3">
                Recruitment Requirement
              </div>
              <div className="co-news-column poppins3">Action</div>
            </div>

            {/* Render the list of recruitment data */}
            {recruitmentList.map((info, index) => (
              <div className="co-news-container border-black" key={index}>
                <div className="co-news-column poppins3 text-left">
                  {info.recruitmentInfo}
                </div>
                <div className="co-news-column poppins3">{info.candidates}</div>
                <div className="co-news-column poppins3">{info.time}</div>
                <div className="co-news-column poppins3">{info.position}</div>
                <div className="co-news-column poppins3">{info.position}</div>
                <div className="co-news-column poppins3">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDeleteNews(index)} // Call the delete function when clicked
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      case "Candidates":
        return (
          <div>
            <div className="border-b-2 h-16 mb-2 items-center content-center">
              <div className="flex items-center justify-between w-full">
                <div className="flex poppins2 text-2xl justify-start w-96">
                  Candidates
                </div>
                <div className="co-news-add flex items-center">
                  <button className="co-news-button bg-main text-white">
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Table for Candidates */}
            <div className="co-news-container border-black">
              <div className="co-news-column poppins3 text-left">Name</div>
              <div className="co-news-column poppins3">Date of birth</div>
              <div className="co-news-column poppins3"> Position Applied</div>
              <div className="co-news-column poppins3">
                Curriculum Vitae (CV)
              </div>
            </div>
          </div>
        );
      case "Home":
        return (
          <div className="bg-white p-4 shadow-md rounded-lg w-80">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 text-white h-12 w-12 flex items-center justify-center rounded-full">
                  H
                </div>
                <div>
                  <h2 className="text-xl font-bold">HAGG</h2>
                  <p className="text-gray-500 text-sm">Dưới 10</p>
                </div>
              </div>
              <div className="text-gray-400 cursor-pointer">...</div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-red-500">2 thông báo</p>
              <a href="#" className="text-blue-500">
                hagg.iviec.vn
              </a>
            </div>

            <div className="text-right mt-4 text-gray-400">676</div>
          </div>
        );
      case "5":
        return <div>Content for Alex</div>;
      case "6":
        return <div>Content for Team 1</div>;
      case "8":
        return <div>Content for Team 2</div>;
      case "9":
        return <div>Content for Files</div>;
      default:
        return <div>Select an option</div>;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="poppins3"
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={["Recruitment Requirements"]}
          mode="inline"
          items={items}
          onSelect={onMenuSelect}
          className="poppins2 "
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>{selectedKey}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 700,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default CoHome;
