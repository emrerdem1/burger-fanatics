import React from 'react';
import styled from '@emotion/styled';
import { Breakpoints, ColorPalette } from 'helpers/general/constants';
import RestaurantsListView from './RestaurantsListView';
import SearchView from './SearchView';

const RestaurantsScreen = () => {
  return (
    <BackgroundDiv>
      <ContainerDiv>
        <SearchView />
        <RestaurantsListView />
      </ContainerDiv>
    </BackgroundDiv>
  );
};

const ContainerDiv = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 24px 36px;

  @media (max-width: ${Breakpoints.TABLET}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const BackgroundDiv = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 auto;
  background-color: ${ColorPalette.white.secondary};
`;

export default RestaurantsScreen;
