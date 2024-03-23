import React from 'react'
import { Button, ThemeProvider } from 'react-bootstrap';

function WeatherButton() {
  return (
    <div className="btn-area">
      <ThemeProvider prefixes={{ btn: 'btn-weather' }}>
        <Button variant="primary">현재 위치</Button>
        <Button variant="primary">파리</Button>
        <Button variant="primary">뉴욕</Button>
      </ThemeProvider>
    </div>
  )
}

export default WeatherButton