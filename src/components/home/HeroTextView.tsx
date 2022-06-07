import React from 'react';
import { Button } from 'antd';
import styled from '@emotion/styled';
import { ColorPalette, ScreenRoutes } from 'helpers/general/constants';
import { ReactComponent as HandIcon } from 'assets/images/hand-icon.svg';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const HeroTextView = () => {
  const navigate = useNavigate();

  return (
    <TextContainerDiv>
      <TextSpan>
        Are you a burger fanatic? <HandIcon />
      </TextSpan>
      <MainTextHeader>Find the Best Burger Places in the Area!</MainTextHeader>
      <SubTextHeader>
        Read the reviews from burger fanatics, and view the restaurant details! You can also share
        your opition!
      </SubTextHeader>
      <FindButton onClick={() => navigate(ScreenRoutes.BURGER_RESTAURANTS)}>
        <SearchOutlined />
        Search burger places
      </FindButton>
    </TextContainerDiv>
  );
};

const MainTextHeader = styled.h2`
  line-height: 1.2em;
  font-weight: 900;
  margin: 0.3em 0;
`;

const SubTextHeader = styled.h6`
  font-size: 0.5em;
  color: ${ColorPalette.black.secondary};
`;

const TextContainerDiv = styled.div`
  width: 55%;
  font-size: clamp(2vw, 3.3rem, 4vw);
  padding: 0 1.2em;
`;

const FindButton = styled(Button)`
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 0.5em;
  padding: 1.5em 2em;
  margin: 2em auto 0;
  border-radius: 20px;
  color: ${ColorPalette.white.secondary};
  background-color: black;
  border: none;

  &:hover,
  &:active,
  &:focus {
    background-color: ${ColorPalette.black.primary};
    color: white;
  }
`;

const TextSpan = styled.span`
  font-size: 0.42em;
  font-weight: bold;
  padding: 12px 26px 14px;
  border-radius: 87% 13% 91% 9% / 13% 73% 27% 87%;
  color: ${ColorPalette.black.primary};
  background-color: ${ColorPalette.blue.secondary};

  svg {
    vertical-align: middle;
    margin-left: 6px;
    height: 1.6em;
    width: 1.6em;
    transform: translateY(-4px) rotateZ(8deg);
  }
`;

export default HeroTextView;
