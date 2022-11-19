import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./Services";


export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        items: [],
        status: "idle",
    },

    reducers: {},
    extraReducers:(builder) => {
      builder
        .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
        .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        })
    },
})


export default weatherSlice.reducer
