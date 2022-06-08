import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { ScreenRoutes } from 'helpers/general/constants';

const UserActionButtons = () => {
  return (
    <ButtonsContainerDiv>
      <Button type='primary' style={{ borderRadius: 12 }}>
        <Link to={ScreenRoutes.SIGNUP}>Sign up </Link>
      </Button>
      <Button type='link'>
        <Link to={ScreenRoutes.LOGIN}>Login </Link>
      </Button>
    </ButtonsContainerDiv>
  );
};

const ButtonsContainerDiv = styled.div`
  display: flex;
  column-gap: 1em;
`;

export default UserActionButtons;
