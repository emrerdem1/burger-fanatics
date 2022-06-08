import React from 'react';
import styled from '@emotion/styled';
import HeroTextView from './HeroTextView';
import HeroImageView from './HeroImageView';
import { Breakpoints } from 'helpers/general/constants';

const HomeView = () => {
  return (
    <HeroContainerDiv>
      <HeroTextView />
      <HeroImageView />
    </HeroContainerDiv>
  );
};

const HeroContainerDiv = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  max-width: 1440px;
  margin: 0 auto 50px;

  @media (max-width: ${Breakpoints.TABLET}px) {
    justify-content: start;
    flex-direction: column;
  }
`;

export default HomeView;
