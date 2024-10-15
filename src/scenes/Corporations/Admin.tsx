import React, { useState } from "react";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";
import { NewsRegular, AddCircleRegular } from "@fluentui/react-icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  MenuProps,
  theme,
  Modal,
  Button,
} from "antd";
import "./Co-Home.css";
import EditInformationScreen from "./Co-Edit";

import AdRequirement from "./Ad-Requirement"; // Import the updated requirement component
import { useNavigate } from "react-router-dom"; // For navigation
import AdNews from "./Ad-News";
import AdUsers from "./Ad-Users";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

// Define interfaces for both recruitment news and recruitment requirements

// Define the menu items
const items: MenuItem[] = [
  {
    label: "Recruitment Requirements",
    key: "Recruitment Requirements",
    icon: <AddCircleRegular />,
  },
  { label: "Recruitment News", key: "Recruitment News", icon: <NewsRegular /> },
  { label: "Users", key: "Users", icon: <UserOutlined /> },
  { label: "Edit", key: "Edit", icon: <SettingOutlined /> },
];

const Admin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("Recruitment Requirements");
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state
  const navigate = useNavigate(); // For navigating to HomePage

  // State for recruitment news

  const onMenuSelect = ({ key }: { key: string }) => {
    setSelectedKey(key);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Log Out confirmation modal handler
  const showLogOutModal = () => {
    setIsModalVisible(true);
  };

  const handleLogOut = () => {
    setIsModalVisible(false);
    navigate("/cointro"); // Navigate to HomePage
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const renderContent = () => {
    switch (selectedKey) {
      case "Recruitment Requirements":
        return <AdRequirement></AdRequirement>;
      case "Recruitment News":
        return <AdNews></AdNews>;
      case "Users":
        return <AdUsers></AdUsers>;
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
        theme="light"
      >
        <Menu
          theme="light"
          defaultSelectedKeys={["Recruitment Requirements"]}
          mode="inline"
          items={items}
          onSelect={onMenuSelect}
          className="poppins2"
        />
        {/* Add the Log Out button */}
        <div style={{ padding: "16px", textAlign: "center" }}>
          <Button
            type="primary"
            danger
            onClick={showLogOutModal} // Trigger modal
            icon={<SettingOutlined />}
          >
            Log Out
          </Button>
        </div>
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
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
      {/* Log Out confirmation modal */}
      <Modal
        title="Log Out"
        visible={isModalVisible}
        onOk={handleLogOut}
        onCancel={handleCancel}
        okText="Log Out"
        cancelText="Back"
      >
        <p>Are you sure you want to log out?</p>
      </Modal>
    </Layout>
  );
};

export default Admin;
