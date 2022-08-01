import React from 'react';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { IRestaurantInfo } from 'helpers/general/types';
import { Breakpoints } from 'helpers/general/constants';

export interface IRestaurantHeaderInfo {
  icon: IRestaurantInfo['icon'];
  name: IRestaurantInfo['name'];
}

export type TRestaurantHeaderViewProps = IRestaurantHeaderInfo & {
  children?: React.ReactNode;
};

const RestaurantHeaderView: React.FC<TRestaurantHeaderViewProps> = ({ icon, name, children }) => {
  return (
    <IconHeaderDiv>
      <LeftSideDiv>
        <div className='image-container'>
          <img src={icon} alt='restaurant icon' />
        </div>
        <Typography.Title className='title' ellipsis level={3}>
          {name}
        </Typography.Title>
      </LeftSideDiv>
      {children}
    </IconHeaderDiv>
  );
};

const IconHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  margin-bottom: 22px;

  @media (max-width: ${Breakpoints.TABLET}px) {
    flex-direction: column;

    &:first-of-type {
      margin-bottom: 20px;
    }
  }
`;

const LeftSideDiv = styled.div`
  display: flex;
  max-width: 65%;

  .title {
    margin-bottom: 0;
    margin-left: 12px;
  }

  .image-container {
    border-radius: 4px;
    overflow: hidden;
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: ${Breakpoints.TABLET}px) {
    max-width: unset;
  }
`;

export default RestaurantHeaderView;
