import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './components/TopRatedMovieSlide/TopRatedMovieSlide'
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide'

import './MovieHomepage.style.css'

// 1. 배너 > Top Popular 1위
// 2. Popular Movie
// 3. Top Rated Movie
// 4. Upcoming Movie

function MovieHomepage() {
  return (
    <div>
      <Banner />
      <div className="list-container">
        <PopularMovieSlide />
        <TopRatedMovieSlide />
        <UpcomingMovieSlide />
      </div>
    </div>
  )
}

export default MovieHomepage