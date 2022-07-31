import React from 'react';
import AddReviewView from 'components/restaurants/add-review/AddReviewView';
import RestaurantHeaderView from 'components/restaurants/RestaurantHeaderView';
import RestaurantOverview from 'components/restaurants/RestaurantOverview';
import RestaurantReviewBody from 'components/restaurants/RestaurantReviewBody';
import RestaurantStatisticsView from 'components/restaurants/RestaurantStatisticsView';
import RestaurantView from 'components/restaurants/RestaurantView';
import { IBaseApiData, IRestaurantInfo } from 'helpers/general/types';

interface IRestaurantsListProps {
  data: IBaseApiData<IRestaurantInfo>[];
}

const RestaurantsListView: React.FC<IRestaurantsListProps> = ({ data }) => (
  <div>
    {data.map(({ id, attributes }) => {
      return (
        <RestaurantView
          key={id}
          reviewHeader={<RestaurantHeaderView icon={attributes.icon} name={attributes.name} />}
          reviewBody={
            <RestaurantReviewBody info={attributes}>
              <AddReviewView restaurantId={id} />
            </RestaurantReviewBody>
          }>
          <RestaurantOverview address={attributes.address} description={attributes.description}>
            <RestaurantStatisticsView
              reviews={attributes.reviews.data}
              opening_hours={attributes.opening_hours}
            />
          </RestaurantOverview>
        </RestaurantView>
      );
    })}
  </div>
);

export default RestaurantsListView;
