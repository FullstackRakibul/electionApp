import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import MianFooter from '../footer';
import MainHeader from '../header';
const {  Content } = Layout;

type MainLayoutProps = {
  children: ReactNode;
};


const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

  return (
    <>
    <Layout style={{ minHeight: '100vh' }}>
        <Layout style={{ padding: '24px 24px' }}>
          <MainHeader/>
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
        <MianFooter/>
    </Layout>
    </>
  )
}

export default MainLayout