import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeatherByCity } from '../redux/weather/Services'
import TextField from '@mui/material/TextField';

function Form() {
    const dispatch = useDispatch()
    const [cityName, setCityName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchWeatherByCity(cityName))
        setCityName('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                fullWidth
                    label="City Name"
                    variant="filled"
                    type='text'
                    placeholder={cityName}
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                />
            </form>
        </>
    )
}

export default Form