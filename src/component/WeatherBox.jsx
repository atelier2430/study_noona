import React, { useEffect, useState } from 'react';

function WeatherBox({weather}) {
  const [currTemp, setCurrTemp] = useState(null)
  const [imgSrc, setImgSrc] = useState('')
  const [recommText, setRecommText] = useState('')

  // 기온별로 옷차림 추천하기
  const setRecommStyle = (temp) => {
    if(temp <= 4) setRecommText('패딩, 두꺼운 코트, 목도리, 기모제품를 추천해요!')
    else if(temp <= 8) setRecommText('코트, 가죽자켓, 히트텍, 니트, 레깅스를 추천해요!')
    else if(temp <= 11) setRecommText('자켓, 트렌치코트, 야상, 니트, 청바지, 스타킹를 추천해요!')
    else if(temp <= 16) setRecommText('자켓, 가디건, 야상, 스타킹, 청바지, 면바지를 추천해요!')
    else if(temp <= 19) setRecommText('얇은 니트, 맨투맨, 가디건, 청바지를 추천해요!')
    else if(temp <= 22) setRecommText('얇은 가디건, 긴팔, 면바지, 청바지를 추천해요!')
    else if(temp <= 27) setRecommText('반팔, 얇은 셔츠, 반바지, 면바지를 추천해요!')
    else setRecommText('자켓, 가디건, 야상, 스타킹, 청바지, 면바지를 추천해요!')
  }

  const getWeatherInfo = () => {
    setRecommStyle(weather.main.temp)
    setImgSrc(weather.weather[0].icon)
    setCurrTemp(Math.round(weather.main.temp))
  }

  useEffect(() => {
    if(weather) getWeatherInfo()
  },[weather])

  return (
    <div className="weather-card">
      {weather && 
      <span>현재 위치는 {`${currTemp}°C`} <img src={`https://openweathermap.org/img/wn/${imgSrc}.png`} alt="weather" /></span>
      }
      {!weather && '오늘 기분은 어떤가요?'}
      <div className="recomm-text-area">
        {recommText || '기분 좋은 하루가 되길 바래요:)'}
      </div>
    </div>
  )
}

export default WeatherBox