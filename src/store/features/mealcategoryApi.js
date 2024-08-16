import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://flavrstaging.avancerasolution.co.uk';

export const mealcategoryApi = createApi({
  reducerPath: 'mealcategoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['Mealcategory'], // This should be defined at the top level, not inside baseQuery
  endpoints: builder => ({
    getMealcategory: builder.query({
      query: () => `MealCategoryRoutes/GetMealCategoryListing`,
      providesTags: ['Mealcategory'],
    }),
    getSingleMealcategory: builder.query({
      query: ({id}) => `MealCategoryRoutes/GetSingleMealCategory/${id}`,
      providesTags: ['Mealcategory'], // Add this if you want to cache the single category as well
    }),
  }),
});

export const {useGetMealcategoryQuery, useGetSingleMealcategoryQuery} =
  mealcategoryApi;
