export type Colors = 'blue' | 'orange' | 'yellow' | 'black' | 'white';
export interface ColorTypes {
  primary: string;
  secondary: string;
}

export interface IRestaurantInfo {
  id: string;
  icon: string;
  name: string;
  address: string;
  description: string;
  opening_hours: string;
  rating: number;
  reviews: string[];
}
