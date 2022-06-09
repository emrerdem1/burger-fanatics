import { Colors, ColorTypes } from './types';

export enum ScreenRoutes {
  HOME = '/',
  LOGIN = 'login',
  SIGNUP = 'signup',
  RESTAURANTS = 'restaurants',
  NOT_FOUND = '*',
}

export enum Breakpoints {
  TABLET = 768,
  MOBILE = 576,
}

export const ColorPalette: Record<Colors, ColorTypes> = {
  orange: {
    primary: '#F55556',
    secondary: '#FDECEC',
  },
  blue: {
    primary: '#32A3BB',
    secondary: '#aac3d3',
  },
  yellow: {
    primary: '#FEBD2E',
    secondary: '#FFE7B1',
  },
  black: {
    primary: '#2E2E2E',
    secondary: '#676767',
  },
  white: {
    primary: '#fffdf9',
    secondary: '#f8fafc',
  },
};
