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
      style={{backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data && data.results[0].poster_path})`}}
      className="movie-banner"
    >
      <div className="text-area text-white">
        <h2>
          {data && data.results[0].title}
        </h2>
        <p>
          {data && data.results[0].overview}
        </p>
      </div>
    </div>
  )
}

export default Banner