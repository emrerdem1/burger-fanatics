import React from 'react';
import { ReactComponent as BurgerLogo } from 'assets/images/burger-logo.svg';
import styled from '@emotion/styled';
import { Breakpoints, ScreenRoutes } from 'helpers/general/constants';
import { useNavigate } from 'react-router-dom';

const LogoView = () => {
  const navigate = useNavigate();

  return (
    <LogoContainerDiv onClick={() => navigate(ScreenRoutes.HOME)}>
      <BurgerLogoSvg />
      <span>B-Fanatics</span>
    </LogoContainerDiv>
  );
};

const LogoContainerDiv = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.2em;
  color: black;

  @media (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 0.9em;
  }
`;

const BurgerLogoSvg = styled(BurgerLogo)`
  width: 34px;
  margin-right: 0.6em;

  @media (max-width: ${Breakpoints.MOBILE}px) {
    width: 28px;
  }
`;

export default LogoView;
