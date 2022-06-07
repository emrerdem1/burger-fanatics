import React from 'react';
import styled from '@emotion/styled';
import HeroTextView from './HeroTextView';
import HeroImageView from './HeroImageView';

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
  margin: 0 auto;
`;

export default HomeView;
