import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingComp from '../component/Loading';
import WeatherBox from '../component/WeatherBox';
import WeatherButton from '../component/WeatherButton';

function Weather() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  },[])

  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY;
  const [weather, setWeather] = useState(null)
  const cities = [
    { cityId: 5603240, cityName: 'paris', cityNameKr: '파리' },
    { cityId: 5128581, cityName: 'new york', cityNameKr: '뉴욕' },
    { cityId: 1850147, cityName: 'tokyo', cityNameKr: '도쿄' },
    { cityId: 1835847, cityName: 'seoul', cityNameKr: '서울' },
  ]
  const [city, setCity] = useState('seoul')
  const [cityId, setCityId] = useState(1835847)
  const [location, setLocation] = useState(['37.566','126.9784'])

  const [selectedCity, setSelectedCity] = useState(null)

  // 위치(위도, 경도)를 기준으로 날씨 가져오기
  const getWeatherByCurrentLocation = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=${API_KEY}&units=metric&lang=kr`
    try {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setLoading(false)
      setWeather(data)
    } catch (err){
      alert(`날씨를 불러오는데 실패했습니다.\n${err}`)
    }

  }

  useEffect(() => {
    getWeatherByCurrentLocation([location[0], location[1]])
  }, [location])

  // 도시 이름으로 날씨 가져오기
  const getWeatherByCityName = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`
    try {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setLoading(false)
      setWeather(data)
    } catch (err){
      alert(`날씨를 불러오는데 실패했습니다.\n${err}`)
    }
  }

  useEffect(() => {
    getWeatherByCityName()
  }, [city])

  // 도시 아이디로 날씨 가져오기
  const getWeatherByCityId = async () => {
    // const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&units=metric&lang=kr`
    // setLoading(true)
    // const response = await fetch(url)
    // const data = await response.json()
    // setLoading(false)

    // setWeather(data)
  }

  useEffect(() => {
    getWeatherByCityId()
  }, [cityId])

  return (
    <div className='weather-wrap'>
      <Link to="/" className="back" />
      <div className="weather-inner">
        {loading?
        <LoadingComp loading={loading}/>
        :( <>
        <WeatherBox weather={weather} cities={cities}/>
        <WeatherButton
          weather={weather}
          cities={cities}
          setCity={setCity}
          setCityId={setCityId}
          setLocation={setLocation}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}/>
        </> ) }
      </div>
    </div>
  )
}

export default Weather