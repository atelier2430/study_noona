import React, { useEffect } from 'react';

function Weather() {
  const weatherApiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
    const response = await fetch(url)
    const data = await response.json()

    console.log('data', data)
  }
  
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      
      getWeatherByCurrentLocation(lat, lon)
    })
  }

  useEffect(() => {
    getCurrentLocation()
  }, []);

  return (
    <div>Weather</div>
  )
}

export default Weather