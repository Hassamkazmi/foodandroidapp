import {configureStore} from '@reduxjs/toolkit';
import {mealcategoryApi} from './features/mealcategoryApi';
import {meallistingApi} from './features/meallistingApi';

export const store = configureStore({
  reducer: {
    [mealcategoryApi.reducerPath]: mealcategoryApi.reducer,
    [meallistingApi.reducerPath]: meallistingApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      mealcategoryApi.middleware,
      meallistingApi.middleware,
    ),
});
