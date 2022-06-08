import HeaderView from 'components/header/HeaderView';
import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutView = () => {
  return (
    <>
      <HeaderView />
      <Outlet />
    </>
  );
};

export default LayoutView;
