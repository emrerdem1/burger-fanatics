import React from 'react';
import { CustomCard } from 'components/common/styled/Card.styled';
import { ColorPalette } from 'helpers/general/constants';
import styled from '@emotion/styled';
import { Image, Typography } from 'antd';
import FALLBACK_IMAGE from 'assets/images/fallback-image.png';
import { IReviews } from 'helpers/general/types';

interface IRestaurantReviewViewProps {
  reviewData: IReviews;
}

const RestaurantReviewView: React.FC<IRestaurantReviewViewProps> = ({ reviewData }) => {
  return (
    <CustomCard
      margin='12px 0'
      padding='12px 20px'
      border={`2px solid ${ColorPalette.white.secondary}`}
    >
      <ReviewHeaderDiv>
        <span>{reviewData.rating.data.attributes.rating_avg} / 5</span>
        <span>
          Reviewed by: <strong>{reviewData.reviewed_by.data.attributes.username}</strong>
        </span>
      </ReviewHeaderDiv>
      <Typography.Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'Read more...' }}>
        {reviewData.comment}
      </Typography.Paragraph>
      <Image width={70} fallback={FALLBACK_IMAGE} src={reviewData.image} />
    </CustomCard>
  );
};

const ReviewHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export default RestaurantReviewView;
