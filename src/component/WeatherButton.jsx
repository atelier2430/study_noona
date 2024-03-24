import React, { useState, useEffect } from 'react'
import { Button, ThemeProvider } from 'react-bootstrap';

function WeatherButton({weather, cities, setCity, setLocation, selectedCity, setCityId, setSelectedCity}) {
  const [currLocation, setCurrLocation] = useState(null)

  // 현재 위치 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setCurrLocation([lat, lon])
    })
  }

  const handleButtonClick = (item, index) => {
    setCity(item.cityName)
    setSelectedCity(index)
    setCityId(item.cityId)
  }

  const handleCurrLocationButtonClick = () => {
    setLocation(currLocation)
    setSelectedCity(null)
    setCityId(null)
  }

  useEffect(() => {
    getCurrentLocation()
  },[weather])

  return (
    <div className="btn-area">
      <ThemeProvider prefixes={{ btn: 'btn-weather' }}>
        <Button
          variant="primary"
          className={selectedCity == null && 'active'}
          onClick={() => handleCurrLocationButtonClick()}
        >현재 위치</Button>
        {cities.map((city, index) => (
          <Button
            key={city.cityId}
            variant="primary"
            className={index === selectedCity && 'active'}
            onClick={() => handleButtonClick(city, index)}
          >{city.cityName}</Button>
        ))}
      </ThemeProvider>
    </div>
  )
}

export default WeatherButton