import React from 'react';
import RestaurantStatisticsView from './RestaurantStatisticsView';
import { Divider, Typography } from 'antd';
import { IRestaurantInfo } from 'helpers/general/types';
import styled from '@emotion/styled';
import { ColorPalette } from 'helpers/general/constants';

interface IRestaurantInfoBodyProps {
  info: Omit<IRestaurantInfo, 'name' | 'icon'>;
}

const RestaurantInfoBody: React.FC<IRestaurantInfoBodyProps> = ({ info }) => {
  return (
    <div>
      <InfoDetailDiv>
        <Typography.Paragraph>{info.description}</Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text strong>Address:</Typography.Text> {info.address}
        </Typography.Paragraph>
      </InfoDetailDiv>
      <Divider />
      <RestaurantStatisticsView
        rating={info.rating}
        reviewCount={info.reviews.length}
        opening_hours={info.opening_hours}
      />
    </div>
  );
};

const InfoDetailDiv = styled.div`
  color: ${ColorPalette.black.secondary};
`;

export default RestaurantInfoBody;
