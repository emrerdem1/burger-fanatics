import React from 'react';
import { MOCK_RESTAURANTS_INFO } from 'helpers/general/constants';
import RestaurantView from '../../components/restaurants/RestaurantView';

const RestaurantsListView = () => {
  const restaurantList = MOCK_RESTAURANTS_INFO.map((restaurant) => (
    <RestaurantView restaurant={restaurant} key={restaurant.id} />
  ));

  return <div>{restaurantList}</div>;
};

export default RestaurantsListView;
