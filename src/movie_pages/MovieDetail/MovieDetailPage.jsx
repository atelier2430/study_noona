import React from 'react'
import { useParams } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import useMovieDetail from '../../hooks/useMovieDetail'
import LoadingComp from '../../component/common/Loading'

function MovieDetailPage() {
    const { id } = useParams()
    const { data, isLoading, isError, error } = useMovieDetail({id})
    if(isLoading){
      <LoadingComp />
    }
    if(isError) {
      <Alert variant="danger">{error.message}</Alert>
    }
    console.log('dd', data)

  return (
    <div>MovieDetailPage</div>
  )
}

export default MovieDetailPage