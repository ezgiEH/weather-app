import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather, fetchWeatherByCity } from "./Services";


export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },

    reducers: {},
    extraReducers:(builder) => {
      builder
      // fetch weather by city name
        .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
        .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        })
        .addCase(fetchWeather.rejected, (state) => {
        state.status = "failed";
      })
      // fetch weather by longitude and latitude
        .addCase(fetchWeatherByCity.pending, (state) => {
        state.status = "loading";
      })
        .addCase(fetchWeatherByCity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        })
        .addCase(fetchWeatherByCity.rejected, (state) => {
        state.status = "failed";
      })
    },
})


export default weatherSlice.reducer
