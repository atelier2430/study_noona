import React from 'react';
import { Alert } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import usePopularMoviesQuery from '../../../../hooks/usePopularMovies';
import LoadingComp from '../../../../component/common/Loading';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 8
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function PopularMovieSlide() {
    const { data, isLoading, isError, error } = usePopularMoviesQuery()
    if(isLoading){
        <LoadingComp />
    }
    if(isError) {
        <Alert variant="danger">{error.message}</Alert>
    }
    return (
        <div>
            <h3 className="list-title">인기</h3>
            {data && (
                <Carousel
                    infinite
                    centerMode
                    focusOnSelect
                    itemClass='movie-slider p-1'
                    containerClass='carousel-container'
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {data.results.map(movie => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </Carousel>
            )}
        </div>
    )
}

export default PopularMovieSlide