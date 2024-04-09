import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard'

function MovieSlider({title, movies, responsive}) {
    return (
            <div>
                <h3 className="list-title">{title}</h3>
                <Carousel
                    infinite
                    centerMode
                    focusOnSelect
                    itemClass='movie-slider p-1'
                    containerClass='carousel-container'
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </Carousel>
            </div>
    )
}

export default MovieSlider