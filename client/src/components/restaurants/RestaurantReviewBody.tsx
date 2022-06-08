import React from 'react';
import styled from '@emotion/styled';
import { IRestaurantInfo } from 'helpers/general/types';
import { ColorPalette } from 'helpers/general/constants';
import RestaurantReviewView from './RestaurantReviewView';
import AddReviewView from './add-review/AddReviewView';

interface IRestaurantReviewBodyProps {
  info: Omit<IRestaurantInfo, 'name' | 'icon'>;
}

const RestaurantReviewBody: React.FC<IRestaurantReviewBodyProps> = ({ info }) => {
  return (
    <>
      <AddReviewView />
      <ReviewContainerDiv>
        <RestaurantReviewView rating={info.rating_avg} />
        <RestaurantReviewView rating={info.rating_avg} />
      </ReviewContainerDiv>
    </>
  );
};

const SCROLL_BAR_RADIUS = 100;
const ReviewContainerDiv = styled.div`
  overflow-y: auto;
  max-height: 400px;
  padding-right: 8px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    background-color: ${ColorPalette.white.secondary};
    border-radius: ${SCROLL_BAR_RADIUS}px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: ${SCROLL_BAR_RADIUS}px;
    background-color: ${ColorPalette.blue.secondary};
  }
`;

export default RestaurantReviewBody;
