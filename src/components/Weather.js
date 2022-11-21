import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWeather } from '../redux/weather/Services'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Form from './Form';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
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
    return <><h1>Weather</h1><div className="loading"><Form /> <Skeleton variant="rectangular" width={1000} height={400} />Loading...</div>
    </>
  } else if (status === 'succeeded' && weather) {
    return (
      <div>
        <h1>Weather</h1>
        <Form />
        <Box sx={{
          minWidth: 275,
        }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: 'white',
            }}>
            <Box
              sx={{ p: 2, width: '200px', }} >
              <img src={weather.current.condition.icon} alt="weather icon"/>
              <h2>{weather.location.name}</h2>
              <h2>{weather.current.temp_c}°C</h2>
            </Box>
            <Box sx={{ p: 2, }}>
              <h2>{weather.current.condition.text}</h2>
              <h2>Humidity: {weather.current.humidity}%</h2>
            </Box>
          </Box>
          <Grid container spacing={2}
            direction={{ xs: 'column', sm: 'row' }}
            divider={<Divider orientation="vertical" flexItem />}
          >
            {weather.forecast.forecastday.map((day) => (
              <Paper
                elevation={24}
                variant="outlined"
                key={day.date}
                sx={{
                  transition: 'transform 0.3s, border 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                  },
                }}
                
                >
                <Card>
                <img src={day.day.condition.icon} alt="weather icon" />
                <h2>{day.date}</h2>
                <h2>{day.day.maxtemp_c}°C</h2>
                <h2>{day.day.mintemp_c}°C</h2>
                </Card>
              </Paper>
            ))}
          </Grid>
        </Box>
      </div>
    )
  } else if (status === 'failed') {
    return <div>Failed to load</div>
  }
}
export default Weather