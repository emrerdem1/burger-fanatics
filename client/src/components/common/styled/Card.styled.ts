import styled from '@emotion/styled';
import { Breakpoints, ColorPalette } from 'helpers/general/constants';

interface ICustomCardProps {
  margin?: string;
  border?: string;
  padding?: string;
  padding_sm?: string;
}

export const CustomCard = styled.div<ICustomCardProps>`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${ColorPalette.black.primary};
  border: ${(props) => props.border};
  border-radius: 14px;
  background-color: white;

  @media (max-width: ${Breakpoints.TABLET}px) {
    padding: ${(props) => props.padding_sm};
  }
`;
