import React from 'react';
import { Divider, Typography } from 'antd';
import { IRestaurantInfo } from 'helpers/general/types';
import styled from '@emotion/styled';
import { ColorPalette } from 'helpers/general/constants';

interface IRestaurantInfoBodyProps {
  address: IRestaurantInfo['address'];
  description: IRestaurantInfo['description'];
  children: React.ReactNode;
}

const RestaurantInfoBody: React.FC<IRestaurantInfoBodyProps> = ({
  address,
  description,
  children,
}) => {
  return (
    <div>
      <InfoDetailDiv>
        <Typography.Paragraph>{description}</Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text strong>Address:</Typography.Text> {address}
        </Typography.Paragraph>
      </InfoDetailDiv>
      <Divider />
      {children}
    </div>
  );
};

const InfoDetailDiv = styled.div`
  color: ${ColorPalette.black.secondary};
`;

export default RestaurantInfoBody;
