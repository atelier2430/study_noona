import React, { useEffect, useState } from 'react';
import recommImg4 from '../assets/images/project02/temp-4.png'
import recommImg8 from '../assets/images/project02/temp-8.png'
import recommImg11 from '../assets/images/project02/temp-11.png'
import recommImg16 from '../assets/images/project02/temp-16.png'
import recommImg19 from '../assets/images/project02/temp-19.png'
import recommImg22 from '../assets/images/project02/temp-22.png'
import recommImg27 from '../assets/images/project02/temp-27.png'
import recommImg28 from '../assets/images/project02/temp-28.png'

function WeatherBox({weather, cities}) {
  const [currTemp, setCurrTemp] = useState(null)
  const [currDecs, setCurrDesc] = useState(null)
  const [imgSrc, setImgSrc] = useState('')
  const [recommText, setRecommText] = useState('')
  const [recommImg, setRecommImg] = useState(null)
  const [cityName, setCityName] = useState('서울')

  // 기온별로 옷차림 추천하기
  const setRecommStyle = (temp) => {
    if(temp <= 4) {
      setRecommText('패딩, 두꺼운 코트, 목도리, 기모제품를 추천해요!')
      setRecommImg(recommImg4)
    }
    else if(temp <= 8) {
      setRecommText('코트, 가죽자켓, 히트텍, 니트, 레깅스를 추천해요!')
      setRecommImg(recommImg8)
    }
    else if(temp <= 11) {
      setRecommText('자켓, 트렌치코트, 야상, 니트, 청바지, 스타킹를 추천해요!')
      setRecommImg(recommImg11)
    }
    else if(temp <= 16) {
      setRecommText('자켓, 가디건, 야상, 스타킹, 청바지, 면바지를 추천해요!')
      setRecommImg(recommImg16)
    }
    else if(temp <= 19) {
      setRecommText('얇은 니트, 맨투맨, 가디건, 청바지를 추천해요!')
      setRecommImg(recommImg19)
    }
    else if(temp <= 22) {
      setRecommText('얇은 가디건, 긴팔, 면바지, 청바지를 추천해요!')
      setRecommImg(recommImg22)
    }
    else if(temp <= 27) {
      setRecommText('반팔, 얇은 셔츠, 반바지, 면바지를 추천해요!')
      setRecommImg(recommImg27)
    }
    else {
      setRecommText('자켓, 가디건, 야상, 스타킹, 청바지, 면바지를 추천해요!')
      setRecommImg(recommImg28)
    }
  }

  const getWeatherInfo = () => {
    setRecommStyle(weather.main.temp)
    setImgSrc(weather.weather[0].icon)
    setCurrTemp(Math.round(weather.main.temp))
    setCurrDesc(weather.weather[0].description)

    const currentCity = cities.filter((city) => city.cityName.toUpperCase() === weather.name.toUpperCase())
    setCityName(currentCity.length > 0 ? currentCity[0].cityNameKr : '현재 위치')
  }

  useEffect(() => {
    if(weather) getWeatherInfo()
  },[weather])

  return (
    <div className="weather-card">
      {weather && 
      <span>
        {weather.name && cityName}의 날씨는 {currDecs}!
          <span className="icon-area">
            {`${currTemp}°C`}
            <img src={`https://openweathermap.org/img/wn/${imgSrc}.png`} alt="weather" />
          </span>
        </span>
      }
      {!weather && '오늘 기분은 어떤가요?'}
      <div className="recomm-text-area">
        {recommText || '기분 좋은 하루가 되길 바래요:)'}
        <img src={recommImg} alt="추천 옷차림" />
      </div>
    </div>
  )
}

export default WeatherBox