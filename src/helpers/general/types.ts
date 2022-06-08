interface IReviewUser {
  id: string;
  name: string;
}

interface IReviewRating {
  rating_avg: number;
  taste: number;
  texture: number;
  visual: number;
}

interface IReviewsByRestaurant {
  restaurant_id: string;
  reviews: IReviews[];
}

interface IRestaurantsData {
  attributes: IRestaurantInfo;
  id: string;
}

export interface IReviews {
  id: string;
  image: string;
  rating: IReviewRating;
  comment: string;
  reviewed_by: IReviewUser;
}

export interface IRestaurantInfo {
  icon: string;
  name: string;
  address: string;
  description: string;
  opening_hours: string;
  rating_avg: number;
  reviews?: IReviews[];
}

export interface IRestaurantsResponse {
  data: IRestaurantsData[];
  meta: any;
}

export type Colors = 'blue' | 'orange' | 'yellow' | 'black' | 'white';
export interface ColorTypes {
  primary: string;
  secondary: string;
}
