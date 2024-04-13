import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import LoadingComp from '../../../../component/common/Loading'
import useMovieReviewQuery from '../../../../hooks/useMovieReview'
import './MovieReview.style.css'

function MovieReview({id}) {
    const { data, isLoading, isError, error } = useMovieReviewQuery({id})
    const [toggledReview, setToggledReview] = useState({});
    if(isLoading){
        <LoadingComp />
    }
    if(isError) {
        <Alert variant="danger">{error.message}</Alert>
    }

    const handleToggle = (reviewId) => {
        setToggledReview(prevState => ({
            ...prevState,
            [reviewId]: !prevState[reviewId]
        }));
    };

  return (
    <div className="detail-box">
      <h4 className="detail-title">Review</h4>
      {data && data.results
      .map(review => (
        <button
          type="button"
          className={`review ${toggledReview[review.id]?'open':''}`}
          key={review.id}
          onClick={() => handleToggle(review.id)}
        >
          <div className="author-area">
            <div className="author">{review.author}</div>
            <div className="rating">
              <div className="star-area">
                <span className="star" style={{width:`${review.author_details.rating*10}%`}}>({review.author_details.rating}점)</span>
              </div>
              <div>({review.author_details.rating}점)</div>
            </div>
          </div>
          <div className="content">{review.content}</div>
        </button>
      ))
      }
    </div>
  )
}

export default MovieReview