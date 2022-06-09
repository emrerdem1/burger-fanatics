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

const getMockRestaurants = (): any[] => {
  return [...Array(6)].map((_, index) => ({
    id: index.toString(),
    icon: `https://source.unsplash.com/random/50x50/?restaurant+${index}`,
    name: `#${index} Restaurant`,
    address: 'X Street and the cross site of the building Avanos/Nevsehir',
    description: 'Lorme ipmsum description Lorme ipmsum description Lorme ipmsum description ',
    opening_hours: '',
    rating_avg: 2,
    reviews: [
      {
        id: index.toString(),
        image: `https://source.unsplash.com/random/50x50/?restaurant+${index}`,
        comment: 'Aman tanrım neler oluyor burada',
        reviewed_by: { id: index.toString(), name: '1 User' },
        rating: {
          rating_avg: 1,
          taste: 1,
          texture: 1,
          visual: 1,
        },
      },
    ],
  }));
};

export const MOCK_RESTAURANTS = {
  data: getMockRestaurants().map((res, idx) => ({ id: idx.toString(), attributes: res })),
  meta: [],
};
