import React from 'react';
import styled from '@emotion/styled';
import LogoView from './LogoView';
import { Breakpoints } from 'helpers/general/constants';
import UserActionButtons from './UserActionButtons';

const HeaderView = () => {
  return (
    <ContainerNav>
      <LogoView />
      <UserActionButtons />
    </ContainerNav>
  );
};

const ContainerNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 74px;
  padding: 0 4em;
  background-color: white;

  @media (max-width: ${Breakpoints.MOBILE}px) {
    padding: 0 1.5em;
  }
`;

export default HeaderView;
