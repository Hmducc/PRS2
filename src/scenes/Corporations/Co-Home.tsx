import { FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { AddCircleRegular, NewsRegular } from "@fluentui/react-icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./Co-Home.css";

import React, { useState } from "react";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

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
  getItem("Recruiment News", "Recruitment News", <NewsRegular />),
  getItem("Add", "Add", <AddCircleRegular />),
  getItem("Candicates", "Candicates", <UserOutlined />),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const CoHome: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("Recruitment News"); // To track the selected key
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onMenuSelect = ({ key }: { key: string }) => {
    setSelectedKey(key);
  };

  // Render different content based on the selected sidebar item
  const renderContent = () => {
    switch (selectedKey) {
      case "Recruitment News":
        return (
          <div>
            <div className=" border-b-2  h-16 mb-2  items-center content-center">
              <div className="flex items-center justify-between w-full">
                <div className="flex poppins2  text-2xl justify-start w-96">
                  Recruitment News
                </div>
                <div className="co-news-add flex items-center">
                  <button className="co-news-button bg-main text-white poppins2">
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="co-news-container border-black">
              <div className="co-news-column poppins3 text-left">
                Recruitment Information
              </div>
              <div className="co-news-column poppins3">
                Number of candicates
              </div>
              <div className="co-news-column poppins3"> Recruitment time</div>
              <div className="co-news-column poppins3">Position</div>
            </div>
          </div>
        );
      case "Add":
        return <div className="bg-blue-300">Content for Option 2</div>;
      case "Candicates":
        return (
          <div>
            <div className=" border-b-2  h-16 mb-2  items-center content-center">
              <div className="flex items-center justify-between w-full">
                <div className="flex poppins2  text-2xl justify-start w-96">
                  Candicates
                </div>
                <div className="co-news-add flex items-center">
                  <button className="co-news-button bg-main text-white">
                    Add
                  </button>
                </div>
              </div>
            </div>

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
      case "4":
        return <div>Hello ditconmemay</div>;
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
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["News"]}
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
