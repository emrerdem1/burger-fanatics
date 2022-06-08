import React from 'react';
import { CustomCard } from 'components/common/styled/Card.styled';
import { ColorPalette } from 'helpers/general/constants';
import styled from '@emotion/styled';
import { Image, Typography } from 'antd';
import FALLBACK_IMAGE from 'assets/images/fallback-image.png';
import { IRestaurantInfo } from 'helpers/general/types';

const DEFAULT_IMAGE =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
const DEFAULT_COMMENT = `Do you find yourself struggling more than usual with the current ongoing situation or is it
  an illusiation to you? Do you find yourself struggling more than usual with the current
  ongoing situation or is it an illusiation to you? Do you find yourself struggling more than
  usual with the current ongoing situation or is it an illusiation to you?s`;

interface IRestaurantReviewViewProps {
  rating: IRestaurantInfo['rating'];
  comment?: string;
  image?: string;
  reviewed_by?: string;
}

const RestaurantReviewView: React.FC<IRestaurantReviewViewProps> = ({
  rating,
  comment,
  image,
  reviewed_by,
}) => {
  return (
    <CustomCard
      margin='12px 0'
      padding='12px 20px'
      border={`2px solid ${ColorPalette.white.secondary}`}
    >
      <ReviewHeaderDiv>
        <span>{rating || '4.5 / 9'}</span>
        <span>
          Reviewed by: <strong>{reviewed_by || 'Emre'}</strong>
        </span>
      </ReviewHeaderDiv>
      <Typography.Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'Read more...' }}>
        {comment || DEFAULT_COMMENT}
      </Typography.Paragraph>
      <Image width={70} fallback={FALLBACK_IMAGE} src={image || DEFAULT_IMAGE} />
    </CustomCard>
  );
};

const ReviewHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export default RestaurantReviewView;
