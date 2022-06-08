import React from 'react';
import { CustomCard } from 'components/common/styled/Card.styled';
import SearchInputView from './SearchInputView';
import SearchStatisticsView from '../../components/search/SearchStatisticsView';

const SearchView = () => {
  return (
    <CustomCard padding='16px 24px'>
      <h2>Search Nearby Burger Places</h2>
      <SearchInputView />
      <SearchStatisticsView />
    </CustomCard>
  );
};

export default SearchView;
