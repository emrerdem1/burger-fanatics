import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IRestaurantInfo,
  IRestaurantsResponse,
  IReviews,
  UserCredentialRequest,
  UserResponse,
} from 'helpers/general/types';
import { ApiRoutes, ApiTags } from './constants';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/v2',
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer ${process.env.REACT_APP_API_KEY}`);
      return headers;
    },
  }),
  tagTypes: [ApiTags.REVIEW, ApiTags.RESTAURANT],
  endpoints: (builder) => ({
    getRestaurants: builder.query<IRestaurantsResponse, void>({
      query: () => ApiRoutes.RESTAURANTS,
      providesTags: [ApiTags.RESTAURANT],
    }),
    getReviewsByRestaurant: builder.query<IRestaurantInfo, string>({
      query: (restaurantId: string) => `${ApiRoutes.REVIEWS}/${restaurantId}`,
      providesTags: [ApiTags.REVIEW],
    }),
    addNewReview: builder.mutation<boolean, IReviews>({
      query: (review) => ({
        url: ApiRoutes.REVIEWS,
        method: 'POST',
        body: review,
      }),
      invalidatesTags: [ApiTags.REVIEW],
    }),
    login: builder.mutation<UserResponse, UserCredentialRequest>({
      query: (credentials) => ({
        url: ApiRoutes.LOGIN,
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation<UserResponse, UserCredentialRequest>({
      query: (credentials) => ({
        url: ApiRoutes.SIGNUP,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetReviewsByRestaurantQuery,
  useAddNewReviewMutation,
  useLoginMutation,
  useSignupMutation,
} = apiSlice;
