import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IRestaurantInfo,
  IBaseApiResponse,
  RegisterCredentials,
  UserCredentialRequest,
  UserResponse,
  IAddReviewSpec,
} from 'helpers/general/types';
import { ApiRoutes, ApiTags } from './constants';

const BASE_API_URL =
  process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL : 'http://localhost:1337';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_API_URL}/api`,
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
    addNewReview: builder.mutation<void, IAddReviewSpec>({
      query: (review) => ({
        url: ApiRoutes.REVIEWS,
        method: 'POST',
        body: { data: review },
      }),
      invalidatesTags: [ApiTags.RATING, ApiTags.REVIEW, ApiTags.RESTAURANT],
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
} = apiSlice;
