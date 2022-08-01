import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { Breakpoints, ColorPalette } from 'helpers/general/constants';
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
    if (reviews.length === 0) return '-';

    const ratings = reviews.map((review) => review.attributes.rating.rating_avg);
    return getDecimalValue(ratings);
  }, [reviews]);

  return (
    <CardFooterDiv>
      <BoxDiv>
        <InfoTitleDiv>
          <RadarChartOutlined /> <strong>Rating: </strong>
        </InfoTitleDiv>
        <span className='detail-data'>{ratingAverage}</span>
      </BoxDiv>
      <BoxDiv>
        <InfoTitleDiv>
          <BarChartOutlined /> <strong>Reviews: </strong>
        </InfoTitleDiv>
        <span className='detail-data'>{reviews.length} people</span>
      </BoxDiv>
      <BoxDiv>
        <InfoTitleDiv>
          <FieldTimeOutlined /> <strong>Hours of operation: </strong>
        </InfoTitleDiv>
        <span className='detail-data'>{opening_hours}</span>
      </BoxDiv>
    </CardFooterDiv>
  );
};

const CardFooterDiv = styled.div`
  display: flex;
  column-gap: 2rem;
  color: ${ColorPalette.black.secondary};

  @media (max-width: ${Breakpoints.MOBILE}px) {
    column-gap: 1.2rem;
  }
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

  @media (max-width: ${Breakpoints.MOBILE}px) {
    overflow: hidden;
    justify-content: center;
  }
`;

const InfoTitleDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;,
`;

export default RestaurantStatisticsView;
