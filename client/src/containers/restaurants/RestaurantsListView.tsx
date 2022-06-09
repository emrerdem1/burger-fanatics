import React, { useMemo } from 'react';
import RestaurantView from '../../components/restaurants/RestaurantView';
import { useGetRestaurantsQuery } from 'redux/api/apiSlice';
import LoaderView from 'components/common/LoaderView';
import ErrorView from 'components/common/ErrorView';

const RestaurantsListView = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  const restaurantList = useMemo(
    () =>
      data?.data.map((restaurant) => (
        <RestaurantView restaurant={restaurant.attributes} key={restaurant.id} />
      )),
    [data?.data],
  );

  if (isError) return <ErrorView hasHomeNavigation />;
  if (isLoading || !data) return <LoaderView />;

  return <div>{restaurantList}</div>;
};

export default RestaurantsListView;
