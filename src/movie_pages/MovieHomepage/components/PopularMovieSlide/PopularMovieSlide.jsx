import React from 'react';
import { Alert } from 'react-bootstrap';
import usePopularMoviesQuery from '../../../../hooks/usePopularMovies';
import LoadingComp from '../../../../component/common/Loading';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import responsive from '../../../../constants/responsive';



function PopularMovieSlide() {
    const { data, isLoading, isError, error } = usePopularMoviesQuery()
    if(isLoading){
        <LoadingComp />
    }
    if(isError) {
        <Alert variant="danger">{error.message}</Alert>
    }

    return (
        <div className="slide-container">
            {data && <MovieSlider title="Popular Movies" movies={data.results} responsive={responsive}/>}
        </div>
    )
}

export default PopularMovieSlide