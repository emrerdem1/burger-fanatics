import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as BurgerImage } from 'assets/images/burger-image.svg';
import { ColorPalette } from 'helpers/general/constants';

const HeroImageView = () => {
  return (
    <HeroImageContainerDiv>
      <BurgerImage />
    </HeroImageContainerDiv>
  );
};

const HeroImageContainerDiv = styled.div`
  position: relative;
  width: 40%;
  padding: 0 2em;
  transform: perspective(4cm) rotateX(354deg) rotateY(8deg);

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${ColorPalette.blue.secondary};
    z-index: -1;
    clip-path: ellipse(285% 100% at 97% 100%);
  }
`;

export default HeroImageView;
