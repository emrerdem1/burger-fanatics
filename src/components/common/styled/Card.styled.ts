import styled from '@emotion/styled';
import { ColorPalette } from 'helpers/general/constants';

interface ICustomCardProps {
  margin?: string;
  padding?: string;
  border?: string;
}

export const CustomCard = styled.div<ICustomCardProps>`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  color: ${ColorPalette.black.primary};
  border: ${(props) => props.border};
  border-radius: 14px;
  background-color: white;
`;
