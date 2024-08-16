import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://flavrstaging.avancerasolution.co.uk';

export const meallistingApi = createApi({
  reducerPath: 'meallistingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['MealListing'], // Moved this outside of baseQuery
  endpoints: builder => ({
    getMealListing: builder.query({
      query: ({filterData}) =>
        `MealCategoryRoutes/GetCategoryListingWithMeals?id=${filterData}`,
      providesTags: ['MealListing'],
    }),
    getSingleMealListing: builder.query({
      query: ({id}) => `MealRoutes/GetSingleMeal/${id}`,
    }),
  }),
});

export const {useGetMealListingQuery, useGetSingleMealListingQuery} =
  meallistingApi;
