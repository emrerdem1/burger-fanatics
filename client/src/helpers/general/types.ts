interface IReviewUser {
  username: string;
  email: string;
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

export interface User {
  id: string;
  email: string;
  username: string;
}

export interface UserCredentialRequest {
  identifier: string;
  password: string;
}

/**
 *
jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjU0NzYzODk5LCJleHAiOjE2NTczNTU4OTl9.LLIRX_SFQzSbz15JlH-ZPVljvdF5CJN2krK_Yc39z1A"
user: {id: 5, username: "asdasd", email: "admin@gmail.com", provider: "local", confirmed: true,…}
blocked: false
confirmed: true
createdAt: "2022-06-09T08:38:19.858Z"
email: "admin@gmail.com"
id: 5
provider: "local"
role: {id: 1, name: "Authenticated", description: "Default role given to authenticated user.",…}
updatedAt: "2022-06-09T08:38:19.858Z"
username: "asdasd"
*/

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
