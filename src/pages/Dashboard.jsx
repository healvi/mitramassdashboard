import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, url) {
  return {
    key,
    icon,
    label,
    url,
  };
}

const items = [
  getItem("Main Dashboard", "1", <PieChartOutlined />, "/"),
  getItem("Customer", "2", <DesktopOutlined />, "/Customer"),
];

const Dashboard = () => {
  const [menuActive, setMenuActive] = useState(1);
  const [collapsed, setCollapsed] = useState(false);
  let location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    let active = items.find((v) => v.url === location.pathname);
    setMenuActive(active.key);
  }, [menuActive, navigate, location]);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          selectedKeys={[menuActive.toString()]}
          mode="inline"
          onSelect={({ item, key }) => navigate(item.props.url)}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {/* breadcumb */}
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          {/* content */}
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        {/* footer */}
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
