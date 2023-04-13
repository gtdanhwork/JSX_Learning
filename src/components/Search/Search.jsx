import { Input, Select, ConfigProvider } from 'antd';
import { SearchOutlined } from '@ant-design/icons/lib/icons';
import React, { useState } from 'react';
import '../../components/Search/Search.scss';

const Search = () => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    alert('You search ' + value + ' for ' + category);
  };

  const items = [
    {
      value: 'macbook',
      label: 'MacBook',
    },
    {
      value: 'asus',
      label: 'Asus',
    },
    {
      value: 'hp',
      label: 'HP',
    },
    {
      value: 'lenovo',
      label: 'Lenovo',
    },
    {
      value: 'acer',
      label: 'Acer',
    },
    {
      key: 'dell',
      label: 'Dell',
    },
    {
      value: 'lg',
      label: 'LG',
    },
    {
      value: 'msi',
      label: 'MSI',
    },
  ];

  return (
    <div className="navSearch">
      <div className="searchCategories">
        <ConfigProvider
          theme={{
            components: {
              Select: {
                colorTextPlaceholder: '#000000',
              },
            },
          }}
        >
          <Select
            size="large"
            style={{ width: 150, borderRight: '1px solid #D1D1D1' }}
            bordered={false}
            options={items}
            placeholder="All Categories"
            onChange={(e) => setCategory(e)}
          />
          <Input
            size="large"
            placeholder="Search Products, Categories..."
            style={{ width: 600 }}
            bordered={false}
            suffix={<SearchOutlined onClick={handleSubmit} />}
            onChange={(e) => setValue(e.target.value)}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default Search;
