import React from 'react'
import { Alert } from 'react-bootstrap'
import usePopularMoviesQuery from '../../../../hooks/usePopularMovies'
import LoadingComp from '../../../../component/common/Loading'
import './Banner.style.css'

function Banner() {
    const { data, isLoading, isError, error } = usePopularMoviesQuery()
    if(isLoading){
      <LoadingComp />
    }
    if(isError) {
      <Alert variant="danger">{error.message}</Alert>
    }
  return (
    <div
      style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.results[0].poster_path})`}}
      className="movie-banner"
    >
      <div className="text-area text-white">
        <h2>
          {data?.results[0].title}
        </h2>
        <p>
          {data?.results[0].overview}
        </p>
      </div>
    </div>
  )
}

export default Banner