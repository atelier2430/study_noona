import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'

// 1. 배너 > Top Popular 1위
// 2. Popular Movie
// 3. Top Rated Movie
// 4. Upcoming Movie

function MovieHomepage() {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
    </div>
  )
}

export default MovieHomepage