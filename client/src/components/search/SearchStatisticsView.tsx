import React from 'react';
import styled from '@emotion/styled';
import { ColorPalette } from 'helpers/general/constants';
import { useGetRestaurantsQuery } from 'redux/api/apiSlice';

const SearchStatisticsView = () => {
  const { data, isSuccess } = useGetRestaurantsQuery();

  if (!isSuccess) return null;

  return <StatisticDiv>{data?.data.length} restaurant found</StatisticDiv>;
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
