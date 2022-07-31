import React, { cloneElement, useMemo } from 'react';
import { CustomCard } from 'components/common/styled/Card.styled';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { Breakpoints, ColorPalette } from 'helpers/general/constants';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import useToggle from 'hooks/useToggle';

interface IRestaurantViewProps {
  reviewHeader: React.ReactElement;
  reviewBody: React.ReactNode;
  children: React.ReactNode;
}

const RestaurantView: React.FC<IRestaurantViewProps> = ({
  reviewHeader,
  reviewBody,
  children: reviewOverview,
}) => {
  const { isShown, toggleVisibility } = useToggle();

  const reviewHeaderWithToggle = useMemo(
    () =>
      cloneElement(reviewHeader, {
        children: (
          <ToggleReviewsButton
            onClick={toggleVisibility}
            icon={isShown ? <DownOutlined /> : <RightOutlined />}>
            {isShown ? 'Back to the Info' : 'See Reviews'}
          </ToggleReviewsButton>
        ),
      }),
    [isShown, toggleVisibility, reviewHeader],
  );

  return (
    <CustomCard padding='16px 26px' padding_sm='16px 16px' margin='12px 0'>
      {reviewHeaderWithToggle}
      <VisibilityTogglerDiv shouldShow={!isShown}>{reviewOverview}</VisibilityTogglerDiv>
      <VisibilityTogglerDiv shouldShow={isShown}>{reviewBody}</VisibilityTogglerDiv>
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
