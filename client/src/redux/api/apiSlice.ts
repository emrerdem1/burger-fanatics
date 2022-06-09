import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IRestaurantInfo,
  IBaseApiResponse,
  RegisterCredentials,
  UserCredentialRequest,
  UserResponse,
  IAddReviewSpec,
  IReviewRating,
  IReviewRatingResponse,
} from 'helpers/general/types';
import { ApiRoutes, ApiTags } from './constants';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/api',
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer ${process.env.REACT_APP_API_KEY}`);
      return headers;
    },
  }),
  tagTypes: [ApiTags.USER, ApiTags.RATING, ApiTags.REVIEW, ApiTags.RESTAURANT],
  endpoints: (builder) => ({
    getRestaurants: builder.query<IBaseApiResponse<IRestaurantInfo>, void>({
      query: () => ApiRoutes.RESTAURANTS,
      providesTags: [ApiTags.RESTAURANT],
    }),
    getReviewsByRestaurant: builder.query<IRestaurantInfo, string>({
      query: (restaurantId: string) => `${ApiRoutes.REVIEWS}/${restaurantId}`,
      providesTags: [ApiTags.REVIEW],
    }),
    addRating: builder.mutation<IReviewRatingResponse, IReviewRating>({
      query: (review) => ({
        url: ApiRoutes.RATING,
        method: 'POST',
        body: { data: review },
      }),
      invalidatesTags: [ApiTags.RATING],
    }),
    addNewReview: builder.mutation<void, IAddReviewSpec>({
      query: (review) => ({
        url: ApiRoutes.REVIEWS,
        method: 'POST',
        body: { data: review },
      }),
      invalidatesTags: [ApiTags.REVIEW],
    }),
    login: builder.mutation<UserResponse, UserCredentialRequest>({
      query: (credentials) => ({
        url: ApiRoutes.LOGIN,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: [ApiTags.USER],
    }),
    signup: builder.mutation<UserResponse, RegisterCredentials>({
      query: (credentials) => ({
        url: ApiRoutes.SIGNUP,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: [ApiTags.USER],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetReviewsByRestaurantQuery,
  useAddNewReviewMutation,
  useLoginMutation,
  useSignupMutation,
  useAddRatingMutation,
} = apiSlice;
