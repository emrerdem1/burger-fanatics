import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchInputView = () => {
  return (
    <Input className='search-input' placeholder='Enter your username' prefix={<SearchOutlined />} />
  );
};

export default SearchInputView;
