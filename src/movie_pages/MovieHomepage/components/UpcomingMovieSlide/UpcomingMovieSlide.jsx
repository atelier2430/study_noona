import React from 'react';
import { Alert } from 'react-bootstrap';
import useUpcomingdMoviesQuery from '../../../../hooks/useUpcomingdMovies'
import LoadingComp from '../../../../component/common/Loading';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import responsive from '../../../../constants/responsive';



function UpcomingMovieSlide() {
    const { data, isLoading, isError, error } = useUpcomingdMoviesQuery()
    if(isLoading){
        <LoadingComp />
    }
    if(isError) {
        <Alert variant="danger">{error.message}</Alert>
    }
    return (
        <div className="slide-container">
            {data && <MovieSlider title="Upcoming Movies" movies={data.results} responsive={responsive}/>}
        </div>
    )
}

export default UpcomingMovieSlide