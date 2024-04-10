import React from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundImage404 from '../assets/images/project05_movie/404.png'

function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <div className="page-404">
        <img src={backgroundImage404} alt="404 page"/>
        <button type="button" className="history-back" onClick={() => navigate(-1)}>돌아가기</button>
    </div>
  )
}

export default NotFoundPage