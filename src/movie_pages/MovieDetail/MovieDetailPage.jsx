import React from 'react'
import { useParams } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import useMovieDetail from '../../hooks/useMovieDetail'
import LoadingComp from '../../component/common/Loading'
import MovieReview from './components/MovieReview/MovieReview'
import MovieCreditsBox from './components/MovieCreditsBox/MovieCreditsBox'
import MovieRecomm from './components/MovieRecomm/MovieRecomm'
import MoviePreview from './components/MoviePreview/MoviePreview'

import './MovieDetailPage.style.css'

function MovieDetailPage() {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useMovieDetail({id})
  if(isLoading){
    <LoadingComp />
  }
  if(isError) {
    <Alert variant="danger">{error.message}</Alert>
  }
  return (
    <div
      className="movie-detail"
      style={{backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data&&data.backdrop_path})`}}
    >
      <div className="info-box">
        <div className="poster-area">
          <div className="poster">
            {data && <img src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${data.poster_path}`} alt="" />}
          </div>
          <div className="title-area">
            <div className="title">{data && data.title}</div>
            <div className="genre-area">
              {data && data.genres.map(genre => (
                <span key={genre.id} className="genre">{genre.name}</span>
              ))}
            </div>
            <div className="star-area">
              <span className="star" style={{width:`${data && data.vote_average*10}%`}}>{data && data.vote_average}점</span>
            </div>
          </div>
          <MoviePreview movie={data && data}/>
        </div>
        <div className="overview">
          {data && data.overview}
        </div>
        <div className="popular-area">
          <div className="popular"><span className="icon">인기</span>{data && data.popularity}</div>
          <div className="budget">
              <span className="icon">예산</span>
              {data && new Intl.NumberFormat('en-US', { style: 'decimal' }).format(data.budget)}
          </div>
          <div className="release-date">{data && data.release_date} 개봉</div>
        </div>
        <MovieReview id={id} />
        <MovieCreditsBox id={id} />
        <MovieRecomm id={id} />
      </div>
    </div>
  )
}

export default MovieDetailPage