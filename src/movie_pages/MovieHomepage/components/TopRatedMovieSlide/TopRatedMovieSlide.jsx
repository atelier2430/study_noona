import React from 'react';
import { Alert } from 'react-bootstrap';
import useTopRatedMoviesQuery from '../../../../hooks/useTopRatedMovies';
import LoadingComp from '../../../../component/common/Loading';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import responsive from '../../../../constants/responsive';



function TopRatedMovieSlide() {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery()
    if(isLoading){
        <LoadingComp />
    }
    if(isError) {
        <Alert variant="danger">{error.message}</Alert>
    }
    return (
        <div className="slide-container">
            {data && <MovieSlider title="Top rated Movies" movies={data.results} responsive={responsive}/>}
        </div>
    )
}

export default TopRatedMovieSlide