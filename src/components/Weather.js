import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeather } from '../redux/weather/Services'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Form from './Form';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';



function Weather() {

  const dispatch = useDispatch()
  const [longitude, setLongitude] = useState(0)
  const [latitude, setLatitude] = useState(0)

  const status = useSelector((state) => state.weather.status)
  const weather = useSelector((state) => state.weather.items)

  //get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLongitude(position.coords.longitude)
      setLatitude(position.coords.latitude)
    })
    dispatch(fetchWeather({ latitude, longitude }))
  }, [dispatch, latitude, longitude])




  if (status === 'loading') {
    return <><h1>Weather</h1><div className="loading"><Form /><Skeleton variant="rectangular" width={1000} height={400} />Loading...</div>
    </>
  } else if (status === 'succeeded' && weather) {
    return (
      <div>
        <h1>Weather App</h1>
        <Form />
        <Grid sx={{
          mt: 2,
          pt: 2,
          display: 'flex',
          flexWrap: 'wrap',
          minWidth: 300,
          backdropFilter: 'blur(10px)',
        }}>
          <Box sx={{ pt: 1,   minWidth: 300,}}>
            <Paper elevation={3} sx={{ p: 2, minWidth: 300, background: 'linear-gradient(120deg, #f5f7fa 20%, #c3cfe2 80%)' }} >
              <Card sx={{
                minWidth: 275,
                transition: 'transform 0.3s, border 0.3s',
                '&:hover': {
                  transform: 'translateY(10px)',
                },
                background: 'linear-gradient(120deg, #f5f7fa 20%, #c3cfe2 80%)'
              }} >
                <h2>{weather.location.name}</h2>
                <img src={weather.current.condition.icon} alt="weather icon" width={'120px'} />
                <h3><i>{weather.current.condition.text}</i></h3>
                <h2>{weather.current.temp_c}°C</h2>
                <h3>Feels Like: {weather.current.feelslike_c}°C</h3>
                <h3>Humidity: {weather.current.humidity}%</h3>
                <h3>Wind Speed: {weather.current.wind_kph} km/s</h3>
                <h3>UV: {weather.current.uv}</h3>
              </Card>
            </Paper>
          </Box>
          <Box sx={{
            pt: 1,
            minWidth: 300,
          }} >
            <Paper elevation={3}
              sx={{
                p: 2, minWidth: 300,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'start',
                background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'
              }}>
              {weather.forecast.forecastday.map((day) => (
                <Card
                  elevation={10}
                  key={day.date}
                  sx={{
                    m: 1,
                    transition: 'transform 0.3s, border 0.3s',
                    '&:hover': {
                      transform: 'translateX(10px)',
                    },
                    minWidth: 200,
                    width: 220,
                  }}
                >
                  <Card sx={{
                    p: 2,
                    backdropFilter: 'blur(20px)',
                    background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'
                  }}>
                    <p>{day.date}</p>
                    <img src={day.day.condition.icon} alt="weather icon" width={'120px'} />
                    <p><b>{day.day.condition.text}</b></p>
                    <p>Max: {day.day.maxtemp_c}°C |Min: {day.day.mintemp_c}°C</p>
                    <p>Humidity: {day.day.avghumidity}%</p>
                    <p>Wind Speed: {day.day.maxwind_kph} km/s</p>
                    <p>UV: {day.day.uv}</p>
                  </Card>
                </Card>
              ))}
            </Paper>
          </Box>
        </Grid>
      </div>
    )
  } else if (status === 'failed') {
    return <div>Failed to load</div>
  }
}
export default Weather

