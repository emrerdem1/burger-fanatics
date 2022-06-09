import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { IRestaurantInfo } from 'helpers/general/types';
import { ColorPalette } from 'helpers/general/constants';
import RestaurantReviewView from './RestaurantReviewView';

interface IRestaurantReviewBodyProps {
  info: Omit<IRestaurantInfo, 'name' | 'icon'>;
  children: React.ReactNode;
}

const RestaurantReviewBody: React.FC<IRestaurantReviewBodyProps> = ({ info, children }) => {
  const reviews = useMemo(
    () =>
      info.reviews.data.map((review) => (
        <RestaurantReviewView key={review.id} reviewData={review.attributes} />
      )),
    [info.reviews.data],
  );

  return (
    <>
      {children}
      <ReviewContainerDiv>{reviews}</ReviewContainerDiv>
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
