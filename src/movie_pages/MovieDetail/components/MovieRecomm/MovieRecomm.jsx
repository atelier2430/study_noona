import React from 'react'
import { Alert } from 'react-bootstrap'
import LoadingComp from '../../../../component/common/Loading'
import useMovieRecomm from '../../../../hooks/useMovieRecomm'
import MovieCard from '../../../../common/MovieCard/MovieCard'
import './MovieRecomm.style.css'

function MovieRecomm({id}) {
    const { data, isLoading, isError, error } = useMovieRecomm({id})
    if(isLoading){
        <LoadingComp />
    }
    if(isError) {
        <Alert variant="danger">{error.message}</Alert>
    }

    return (
        <div className="detail-box">
            <h4 className="detail-title">Recommended</h4>
            <div className="recomm-list">
            {data && data.results
            .map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))
            }
            </div>
        </div>
    )
}

export default MovieRecomm