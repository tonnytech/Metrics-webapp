import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://restcountries.com/v3.1/all';

export const fetchCountries = createAsyncThunk(
  'Countries/fetchCountries',
  async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    
  },
);return data;

const initialState = {
  CountryData: [],
  isLoading: false,
};

const CountriesSlice = createSlice({
  name: 'CountryData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchCountries.fulfilled, (state, action) => {
        const newState = { ...state, isLoading: false };
        const responseObject = action.payload;
        const newArray = [];

        responseObject.forEach((country) => {
          newArray.push({
            Name: country.name,
            Population: country.population,
            startOfWeek: country.startOfWeek,
            capital: country.capital,
            flag: country.flag,
            flagImage: country.flags.png,
            continent: country.continents[0],
            region: country.region,
          });
        });

        // console.log(newArray);

        newState.CountryData = newArray;
        return newState;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        const newState = {
          ...state,
          state: 'failed',
          error: action.error.message,
        };
        return newState;
      });
  },
});

//   export const { reserveMission } = MissionDataSlice.actions;

export default CountriesSlice.reducer;
