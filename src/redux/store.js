/* eslint-disable */

import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './CountiesSlice/CountriesSlice';

export const store = configureStore({
  reducer: {
    Countries: countriesReducer,
  },
});
export default store;
