import React from 'react';
import styled from '@emotion/styled';
import { ColorPalette } from 'helpers/general/constants';
import { IRestaurantInfo } from 'helpers/general/types';
import { BarChartOutlined, FieldTimeOutlined, RadarChartOutlined } from '@ant-design/icons';

interface IRestaurantStatisticsViewProps {
  reviewCount: number;
  rating: IRestaurantInfo['rating_avg'];
  opening_hours: IRestaurantInfo['opening_hours'];
}

const RestaurantStatisticsView: React.FC<IRestaurantStatisticsViewProps> = ({
  rating,
  reviewCount,
  opening_hours,
}) => {
  return (
    <CardFooterDiv>
      <BoxDiv>
        <div>
          <RadarChartOutlined /> <strong>Rating: </strong>
        </div>
        <span className='detail-data'>{rating}</span>
      </BoxDiv>
      <BoxDiv>
        <div>
          <BarChartOutlined /> <strong>Reviews: </strong>
        </div>
        <span className='detail-data'>{reviewCount} people</span>
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
