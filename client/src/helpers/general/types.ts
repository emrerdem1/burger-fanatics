interface IReviewUser {
  username: string;
  email: string;
}

export interface IReviewRating {
  rating_avg: string;
  taste: number;
  texture: number;
  visual: number;
}

export interface IReviewRatingResponse {
  id: string;
  rating_avg: string;
  taste: string;
  texture: string;
  visual: string;
  createdBy: User;
}

export interface User {
  id: string;
  email: string;
  username: string;
}

export interface UserCredentialRequest {
  identifier: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  username: string;
}

export interface UserResponse {
  user: User | null;
  jwt: string | null;
}

export interface IReviews {
  image: string;
  comment: string;
  rating: IBaseApiResponseSingular<IReviewRating>;
  reviewed_by: IBaseApiResponseSingular<IReviewUser>;
}

export interface IAddReviewSpec {
  image: string;
  comment: string;
  // "rating" relaation id.
  rating: number;
  // "review" relation id.
  reviewed_by: number;
  // "restaurant" relation id.
  restaurant: number;
}

export interface IRestaurantInfo {
  icon: string;
  name: string;
  address: string;
  description: string;
  opening_hours: string;
  rating_avg: number;
  reviews: IBaseApiResponse<IReviews>;
}

interface IBaseApiData<T> {
  attributes: T;
  id: string;
}

interface IBaseApiResponseSingular<T> {
  data: IBaseApiData<T>;
}

export interface IBaseApiResponse<T> {
  data: IBaseApiData<T>[];
  meta?: any[];
}

export type Colors = 'blue' | 'orange' | 'yellow' | 'black' | 'white';
export interface ColorTypes {
  primary: string;
  secondary: string;
}
