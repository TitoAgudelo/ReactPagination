import React, { useState } from 'react';
import AdmixIcon from './AdmixLogo';
import OverviewComponent from './Overview';
import TableHeaderComponent from './TableHeader';
import TableBodyComponent from './TableBody';

import { Layout, Menu } from 'antd';
import {
  AlignLeftOutlined,
  AreaChartOutlined,
  LogoutOutlined
} from '@ant-design/icons';

import './layout.scss';

const LayoutComponent = () => {
  const { Content, Footer, Sider } = Layout;
  const [isCollapse, setIsCollapse] = useState(true);

  const onCollapse = () => setIsCollapse(!isCollapse);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" collapsible collapsed={isCollapse} onCollapse={onCollapse} style={{ borderRight: '1px solid #f6f6f6' }}>
        <div className="logo">
          { isCollapse ? <AdmixIcon /> :
            <img src="/logo.png" height="25" alt="logo" />
          }
        </div>
        <Menu className="aside-menu" theme="light" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<AlignLeftOutlined />}>
            Top Stories
          </Menu.Item>
          <Menu.Item key="2" icon={<AreaChartOutlined />}>
            Most Recent
          </Menu.Item>
          <Menu.Item key="3" icon={<LogoutOutlined />}>
            Log out
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ backgroundColor: '#fff' }}>
        <Content style={{ margin: '0 16px', backgroundColor: '#f6f6f6' }}>
          <OverviewComponent />
          <TableHeaderComponent />
          <TableBodyComponent />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Web Development ©2020 Created by Tito Agudelo</Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutComponent;
