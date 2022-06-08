import React from 'react';
import styled from '@emotion/styled';
import { ColorPalette } from 'helpers/general/constants';

const SearchStatisticsView = () => {
  return <StatisticDiv>55 restaurant found</StatisticDiv>;
};

const StatisticDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ColorPalette.blue.primary};
  background-color: ${ColorPalette.white.secondary};
  padding: 6px;
  margin-top: 14px;
  border-radius: 10px;
`;

export default SearchStatisticsView;
