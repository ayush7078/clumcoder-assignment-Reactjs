import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import {
  DashboardOutlined,
  CalendarOutlined,
  FormOutlined,
  TableOutlined,
  MessageOutlined,
  InboxOutlined,
  FileOutlined,
  ProfileOutlined,
  OrderedListOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { Text } = Typography;

const Sidebar = () => {
  return (
    <Sider>
      <div
        className="logo"
        style={{
          height: 64,
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        TailAdmin
      </div>
      <Menu theme="dark" mode="inline" defaultOpenKeys={['dashboard']}>
        {/* Menu Title */}
        <div style={{ padding: '10px 10px' }}>
          <Text strong style={{ color: 'white' }}>MENU</Text>
        </div>

        {/* Dashboard Section */}
        <Menu.SubMenu key="dashboard" icon={<DashboardOutlined />} title="Dashboard">
          <Menu.Item key="ecommerce">
            <Link to="/dashboard/ecommerce">eCommerce</Link>
          </Menu.Item>
          <Menu.Item key="analytics">Analytics (Pro)</Menu.Item>
          <Menu.Item key="marketing">Marketing (Pro)</Menu.Item>
          <Menu.Item key="crm">CRM (Pro)</Menu.Item>
          <Menu.Item key="stock">Stock (Pro)</Menu.Item>
        </Menu.SubMenu>

        {/* Calendar Section */}
        <Menu.Item key="calendar" icon={<CalendarOutlined />}>
          Calendar
        </Menu.Item>

        {/* Profile Section */}
        <Menu.Item key="profile" icon={<ProfileOutlined />}>
          Profile
        </Menu.Item>

        {/* Tasks Section */}
        <Menu.SubMenu key="tasks" icon={<FormOutlined />} title="Tasks">
          <Menu.Item key="tasks-element">Task Element 1</Menu.Item>
          <Menu.Item key="tasks-element-2">Task Element 2</Menu.Item>
        </Menu.SubMenu>

        {/* Forms Section */}
        <Menu.SubMenu key="forms" icon={<FormOutlined />} title="Forms">
          <Menu.Item key="form-element">Form Element</Menu.Item>
          <Menu.Item key="pro-form-element">
            <Link to="/forms/pro-form-layout">Pro Form Layout</Link>
          </Menu.Item>
          <Menu.Item key="form-layout">Form Layout</Menu.Item>
        </Menu.SubMenu>

        {/* Tables Section */}
        <Menu.SubMenu key="tables" icon={<TableOutlined />} title="Tables">
          <Menu.Item key="table-element-1">Table Element 1</Menu.Item>
          <Menu.Item key="table-element-2">Table Element 2</Menu.Item>
        </Menu.SubMenu>

        {/* Pages Section */}
        <Menu.SubMenu key="pages" icon={<TableOutlined />} title="Pages">
          <Menu.Item key="pages-element-1">Page Element 1</Menu.Item>
          <Menu.Item key="pages-element-2">Page Element 2</Menu.Item>
        </Menu.SubMenu>

        {/* Support Section */}
        <div style={{ padding: '10px 10px' }}>
          <Text strong style={{ color: 'white' }}>SUPPORT</Text>
        </div>
        <Menu.Item key="messages" icon={<MessageOutlined />}>Messages</Menu.Item>
        <Menu.Item key="inbox" icon={<InboxOutlined />}>
          Inbox
        </Menu.Item>
        <Menu.Item key="invoice" icon={<OrderedListOutlined />}>Invoice</Menu.Item>

        {/* Others Section */}
        <div style={{ padding: '10px 10px' }}>
          <Text strong style={{ color: 'white' }}>OTHERS</Text>
        </div>
        <Menu.SubMenu key="Charts" title="Charts" icon={<FileOutlined />}>
          <Menu.Item key="chart-1">Chart 1</Menu.Item>
          <Menu.Item key="chart-2">Chart 2</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="UI-Element" title="UI-Element" icon={<FileOutlined />}>
          <Menu.Item key="ui-element-1">UI Element 1</Menu.Item>
          <Menu.Item key="ui-element-2">UI Element 2</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="Authentication" title="Authentication" icon={<FileOutlined />}>
          <Menu.Item key="authentication-1">Authentication 1</Menu.Item>
          <Menu.Item key="authentication-2">Authentication 2</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
