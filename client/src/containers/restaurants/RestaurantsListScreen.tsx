import React from 'react';
import { useGetRestaurantsQuery } from 'redux/api/apiSlice';
import LoaderView from 'components/common/LoaderView';
import ErrorView from 'components/common/ErrorView';
import RestaurantsListView from './RestaurantsListView';

const RestaurantsListScreen = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isError) return <ErrorView hasHomeNavigation />;
  if (isLoading || !data) return <LoaderView />;

  return <RestaurantsListView data={data.data} />;
};

export default RestaurantsListScreen;
