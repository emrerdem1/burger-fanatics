import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRestaurantInfo, IRestaurantsResponse, IReviews } from 'helpers/general/types';
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
  tagTypes: [ApiTags.REVIEW],

  endpoints: (builder) => ({
    getRestaurants: builder.query<IRestaurantsResponse, void>({
      query: () => ApiRoutes.RESTAURANTS,
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
  }),
});

export const { useGetRestaurantsQuery, useGetReviewsByRestaurantQuery, useAddNewReviewMutation } =
  apiSlice;
