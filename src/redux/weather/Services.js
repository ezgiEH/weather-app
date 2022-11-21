import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apikey = "39588ffefba546648ef210454222110"


// Fetch weather longitude and latitude
export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async ({latitude, longitude}) => {
        try {
        const response = await axios(`https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${latitude},${longitude}&days=10&aqi=yes&alerts=yes`)
        return response.data
        } catch (error) {
            console.log(error)
            window.alert("Please allow location access")
        }
    }
);


// Fetch weather by city
export const fetchWeatherByCity = createAsyncThunk(
    'weather/fetchWeatherByCity',
    async (cityName) => {
        try {
        const response = await axios(`https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${cityName}&days=10&aqi=yes&alerts=yes`)
        return response.data
        } catch (error) {
            console.log(error)
            window.alert("Please allow location access")
        }
    }
);