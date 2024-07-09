import React, { ReactNode } from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

type MainLayoutProps = {
  children: ReactNode;
};


const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const handleMenuClick = (e: { key: string }) => {
    navigate(e.key);
  };
  return (
    <>
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="/core/dashboard" onClick={handleMenuClick}>
              Core Dashboard
            </Menu.Item>
            <Menu.Item key="/audit/dashboard" onClick={handleMenuClick}>
              Audit Dashboard
            </Menu.Item>
            <Menu.Item key="/audit/about" onClick={handleMenuClick}>
              About
            </Menu.Item>
            <Menu.Item key="/audit/terms" onClick={handleMenuClick}>
              Terms
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
    </>
  )
}

export default MainLayout