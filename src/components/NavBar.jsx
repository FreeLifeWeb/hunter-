import React from 'react';

import { ToTopOutlined, SelectOutlined, LoginOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
  {
    label: (
      <a href="/reg" rel="noopener noreferrer">
        Registration
      </a>
    ),
    key: 'registration',
    icon: <SelectOutlined />,
  },
  {
    label: (
      <a href="/auth" rel="noopener noreferrer">
        Login
      </a>
    ),
    key: 'login',
    icon: <LoginOutlined />,
  },
  {
    label: (
      <a href="/logout" rel="noopener noreferrer">
        Logout
      </a>
    ),
    key: 'logout',
    icon: <ToTopOutlined />,
  },
];

export default function NavBar({ user }) {
  const onClickTest = (e) => {
    console.log('click ', e);
  };

  return (
    <div className="header-container">
      <a href="/" rel="noopener noreferrer">
        <img className="logo" src="img/logo.svg" alt="" />
      </a>
      <Menu
        style={{
          background: 'transparent',
          color: 'white',
          fontSize: 20,
          width: '100%',
        }}
        onClick={onClickTest}
        // selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
}
