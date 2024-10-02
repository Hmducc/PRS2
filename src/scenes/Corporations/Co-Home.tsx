import React, { useState } from "react";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";
import {
  NewsRegular,
  SignOutRegular,
  AddCircleRegular,
} from "@fluentui/react-icons";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd";
import "./Co-Home.css";
import EditInformationScreen from "./Co-Edit";
import CoCandidates from "./Co-Candidates";
import CoRecruitmentNews from "./Co-News";
import CoRecruitmentRequirements from "./Co-Requirement"; // Import the updated requirement component

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

// Define interfaces for both recruitment news and recruitment requirements
interface RecruitmentData {
  recruitmentInfo: string;
  candidates: string;
  time: string;
  position: string;
  status: string; // Added status for recruitment news
}

interface RecruitmentRequirement {
  requirementInfo: string;
  numberOfNews: number;
  needs: string;
  dayCreated: string;
  status: string; // Ensure status is part of this
}

// Define the menu items
const items: MenuItem[] = [
  {
    label: "Recruitment Requirements",
    key: "Recruitment Requirements",
    icon: <AddCircleRegular />,
  },
  { label: "Recruitment News", key: "Recruitment News", icon: <NewsRegular /> },
  { label: "Candidates", key: "Candidates", icon: <UserOutlined /> },
  { label: "Edit", key: "Edit", icon: <SettingOutlined /> },
  { label: "Log Out", key: "Log Out", icon: <SignOutRegular /> },
];

const CoHome: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("Recruitment Requirements");

  // State for recruitment news
  const [recruitmentList, setRecruitmentList] = useState<RecruitmentData[]>([]);

  // State for recruitment requirements
  const [requirementList, setRequirementList] = useState<
    RecruitmentRequirement[]
  >([]);

  const onMenuSelect = ({ key }: { key: string }) => {
    setSelectedKey(key);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderContent = () => {
    switch (selectedKey) {
      case "Recruitment Requirements":
        return (
          <CoRecruitmentRequirements
            requirementList={requirementList}
            setRequirementList={setRequirementList}
          />
        );
      case "Recruitment News":
        return (
          <CoRecruitmentNews
            recruitmentList={recruitmentList}
            setRecruitmentList={setRecruitmentList}
          />
        );
      case "Candidates":
        return <CoCandidates />;
      case "Edit":
        return <EditInformationScreen />;
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
          className="poppins2"
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
