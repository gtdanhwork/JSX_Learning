import { Dropdown } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons/lib/icons';
import React from 'react';

import '../Header/Header.scss';

const Header = () => {

  const items = [
    {
      key: '1',
      label: 'Check Out',
    },
  ];

  const menuProps = {
    items,
  }

  return (
    <div className="header">
      <div className="navbar">
        <div className="navLogo">TMA</div>
        <div className="navPages">
          <span>Home</span>
          <span>Categories</span>
          <span>Contact</span>
        </div>
        <div className="navUser">
          <UserOutlined style={{ fontSize: '200%' }} />
          <div className="userDropdown">
            <Dropdown menu={menuProps} trigger={['click']}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <span>Account</span>
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
