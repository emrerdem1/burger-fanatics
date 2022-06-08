import React from 'react';
import { Space, Spin } from 'antd';
import styled from '@emotion/styled';

const LoaderView: React.FC = () => {
  return (
    <LoaderContainer>
      <Space size='middle'>
        <Spin size='large' />
      </Space>
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 3em;
  width: 100%;
  height: 200px;
`;

export default LoaderView;
