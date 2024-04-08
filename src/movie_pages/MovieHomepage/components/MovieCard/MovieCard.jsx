import React from 'react'
import './MovieCard.style.css'

function MovieCard({movie}) {
  return (
    <div
        style={{backgroundImage: `url(https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path})`}}
        className='movie-card'
    >
        <div className="movie-info">
            <div className="text-info-area">
                {movie.adult && <div className='adult'>청소년 관람불가</div>}
                <div className="genre-list">
                    {movie.genre_ids.map(genre => (
                        <div key={genre} className="genre">{genre}</div>
                        ))}
                </div>
            </div>
            <div className="num-info">
                <span className="vote">평점 {movie.vote_average}</span>/
                <span className="popular">인기 {movie.popularity}</span>
            </div>
            <h4 className='movie-title'>{movie.title}</h4>
            <div className="release">{movie.release_date} 개봉</div>
        </div>
    </div>
  )
}

export default MovieCard