import React, { useCallback, useMemo, useState } from 'react';
import { IRestaurantInfo } from 'helpers/general/types';
import { CustomCard } from 'components/common/styled/Card.styled';
import RestaurantReviewBody from './RestaurantReviewBody';
import RestaurantHeaderView from './RestaurantHeaderView';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { Breakpoints, ColorPalette } from 'helpers/general/constants';
import RestaurantInfoBody from './RestaurantInfoBody';
import { DownOutlined, RightOutlined } from '@ant-design/icons';

interface IRestaurantViewProps {
  restaurant: IRestaurantInfo;
}

const RestaurantView: React.FC<IRestaurantViewProps> = ({ restaurant }) => {
  const [isReviewsShown, setIsReviewsShown] = useState(false);

  const toggleReviews = useCallback(() => {
    setIsReviewsShown((isShown) => !isShown);
  }, []);

  const { restaurantDetails, restaurantReviews } = useMemo(
    () => ({
      restaurantDetails: <RestaurantInfoBody info={restaurant} />,
      restaurantReviews: <RestaurantReviewBody info={restaurant} />,
    }),
    [restaurant],
  );

  return (
    <CustomCard padding='16px 26px' padding_sm='16px 16px' margin='12px 0'>
      <RestaurantHeaderView icon={restaurant.icon} name={restaurant.name}>
        <ToggleReviewsButton
          onClick={toggleReviews}
          icon={isReviewsShown ? <DownOutlined /> : <RightOutlined />}
        >
          {isReviewsShown ? 'Back to the Info' : 'See Reviews'}
        </ToggleReviewsButton>
      </RestaurantHeaderView>
      <VisibilityTogglerDiv shouldShow={!isReviewsShown}>{restaurantDetails}</VisibilityTogglerDiv>
      <VisibilityTogglerDiv shouldShow={isReviewsShown}>{restaurantReviews}</VisibilityTogglerDiv>
    </CustomCard>
  );
};

const VisibilityTogglerDiv = styled.div<{ shouldShow: boolean }>`
  ${({ shouldShow }) => ({
    opacity: shouldShow ? 1 : 0,
    position: shouldShow ? 'relative' : 'absolute',
    zIndex: shouldShow ? 'unset' : -1,
    inset: shouldShow ? 'unset' : 0,
  })}
`;

const ToggleReviewsButton = styled(Button)`
  height: auto;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  color: white;
  background-color: ${ColorPalette.orange.primary};
  max-width: 200px;

  .anticon {
    font-size: 12px;
  }

  &:hover,
  &:active,
  &:focus {
    opacity: 0.9;
    color: white;
    background-color: ${ColorPalette.orange.primary};
  }

  @media (max-width: ${Breakpoints.TABLET}px) {
    align-self: center;
  }
`;

export default RestaurantView;
