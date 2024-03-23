import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WeatherBox from '../component/WeatherBox';
import WeatherButton from '../component/WeatherButton';

function Weather() {
  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY;
  const [weather, setWeather] = useState(null)
  const defaultCity = 'Seoul'

  // 위치(위도, 경도)를 기준으로 날씨 가져오기
  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    const urlByCity = `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${defaultCity}&appid=${API_KEY}&units=metric`
    const response = await fetch(url)
    const data = await response.json()

    console.log(urlByCity, url)
    setWeather(data)
  }

  // 현재 위치 가져오기
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
    <div className='weather-wrap'>
      <Link to="/" className="back" />
      <div className="weather-inner">
        <WeatherBox type="location" weather={weather}/>
        <WeatherButton />
      </div>
    </div>
  )
}

export default Weather