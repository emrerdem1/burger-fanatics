import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { ColorPalette } from 'helpers/general/constants';
import { IBaseApiData, IRestaurantInfo, IReviews } from 'helpers/general/types';
import { BarChartOutlined, FieldTimeOutlined, RadarChartOutlined } from '@ant-design/icons';
import { getDecimalValue } from 'helpers/general/utils';

interface IRestaurantStatisticsViewProps {
  reviews: IBaseApiData<IReviews>[];
  opening_hours: IRestaurantInfo['opening_hours'];
}

const RestaurantStatisticsView: React.FC<IRestaurantStatisticsViewProps> = ({
  reviews,
  opening_hours,
}) => {
  const ratingAverage = useMemo(() => {
    const ratings = reviews.map((review) => review.attributes.rating.rating_avg);
    return getDecimalValue(ratings);
  }, [reviews]);

  return (
    <CardFooterDiv>
      <BoxDiv>
        <div>
          <RadarChartOutlined /> <strong>Rating: </strong>
        </div>
        <span className='detail-data'>{ratingAverage}</span>
      </BoxDiv>
      <BoxDiv>
        <div>
          <BarChartOutlined /> <strong>Reviews: </strong>
        </div>
        <span className='detail-data'>{reviews.length} people</span>
      </BoxDiv>
      <BoxDiv>
        <div>
          <FieldTimeOutlined /> <strong>Hours of operation: </strong>
        </div>
        <span className='detail-data'>{opening_hours}</span>
      </BoxDiv>
    </CardFooterDiv>
  );
};

const CardFooterDiv = styled.div`
  display: flex;
  column-gap: 32px;
  color: ${ColorPalette.black.secondary};
`;

const BoxDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  .anticon {
    color: ${ColorPalette.blue.primary};
  }

  .detail-data {
    margin-left: 4px;
  }
`;

export default RestaurantStatisticsView;
