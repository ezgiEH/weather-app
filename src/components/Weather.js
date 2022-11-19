import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeather } from '../redux/weather/Services'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';




function Weather() {
  const dispatch = useDispatch()
  const [cityName, setCityName] = useState("")

  const weather = useSelector((state) => state.weather.items)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchWeather(cityName))
    setCityName('')
  }


  return (
    <div>
      <h1>Weather</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder="Enter City"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button type="submit">Search</button>

      </form>
      <Box
        sx={{
          display: 'flex', flexDirection: 'row',
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },}}>
        <Box
          sx={{bgcolor: 'primary.main',color: 'primary.contrastText',p: 2,}}>
          {weather.location && <h2>{weather.location.name}</h2>}
          {weather.current && <h2>{weather.current.temp_c}°C</h2>}
          {weather.current && <img src={weather.current.condition.icon} alt="weather icon" />}
        </Box>
        <Box sx={{p: 2,}}>
          {weather.current && <h2>{weather.current.condition.text}</h2>}
          {weather.current && <h2>Humidity: {weather.current.humidity}%</h2>}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-around' }}>
        {weather.forecast && weather.forecast.forecastday.map((day) => (
          <Card variant="outlined" key={day.date} sx={{ width: '280px'}}>
            <h2>{day.date}</h2>
            <h2>{day.day.maxtemp_c}°C</h2>
            <h2>{day.day.mintemp_c}°C</h2>
            <img src={day.day.condition.icon} alt="weather icon" />
            </Card>
        ))}
      </Box>
    </div>
  )
}

export default Weather