import React, { useState } from 'react';
import { Layout, Input, Switch, Avatar, Dropdown, Menu, Badge } from 'antd';
import { BellOutlined, MessageOutlined, DownOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = (checked) => {
    setDarkMode(checked);
    document.body.className = checked ? 'dark-mode' : '';
  };

  const userMenu = (
    <Menu>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>Settings</Menu.Item>
      <Menu.Item>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px',
        background: '#fff',
      }}
    >
      <Input.Search placeholder="Search..." style={{ width: 200 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Switch checked={darkMode} onChange={handleDarkModeToggle} />
        <Badge count={5}>
          <BellOutlined style={{ fontSize: 18 }} />
        </Badge>
        <Badge count={2}>
          <MessageOutlined style={{ fontSize: 18 }} />
        </Badge>
        <Dropdown menu={userMenu} trigger={['click']}>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{display: "flex", flexDirection: "column", margin: "10px", fontSize: 12, color: 'gray' }}>
                               <span>Thomas Anree</span>
                <span>UI/UX Designer </span>
                </div>

             <Avatar src="" alt='image not present' />
          
            <DownOutlined style={{ marginLeft: 8 }} />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeaderBar;
