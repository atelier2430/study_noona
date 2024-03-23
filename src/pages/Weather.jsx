import React, { useState, useEffect } from 'react';

function Weather() {
  const [location, setLocation] = useState({lat: 0, lon: 0})
  let API_URL = '';

  const fetchLocation = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
          console.log('data',data);
      })
      .catch((err) => {
          console.log(err.message);
      });
  }
  
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latValue = position.coords.latitude;
      const lonValue = position.coords.longitude;
      
      setLocation({lat: latValue, lon: lonValue})
    })
    
    API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=d7382c5515b377906712a0821d953cec`

    fetchLocation(API_URL)
  }

  useEffect(() => {
    getCurrentLocation()
  }, []);

  return (
    <div>Weather</div>
  )
}

export default Weather