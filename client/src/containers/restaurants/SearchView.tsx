import React from 'react';
import { CustomCard } from 'components/common/styled/Card.styled';
import SearchStatisticsView from '../../components/search/SearchStatisticsView';

const SearchView = () => {
  return (
    <CustomCard padding='16px 24px'>
      <h2>Review Nearby Burger Places</h2>
      <SearchStatisticsView />
    </CustomCard>
  );
};

export default SearchView;
