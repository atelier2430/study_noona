import React from 'react'
import { Alert } from 'react-bootstrap'
import LoadingComp from '../../../../component/common/Loading'
import useMovieDetailCast from '../../../../hooks/useMovieDetailCredits'
import './MovieCreditsBox.style.css'
import defaultProfileImage from '../../../../assets/images/project05_movie/profile.svg'

function MovieCreditsBox({id}) {
    const { data, isLoading, isError, error } = useMovieDetailCast({id})
    if(isLoading){
        <LoadingComp />
    }
    if(isError) {
        <Alert variant="danger">{error.message}</Alert>
    }

    return (
        <div className="detail-box">
            <h4 className="detail-title">Cast</h4>
            <div className="credit-inner">
                {data && data.cast
                .filter(cast => cast.order <= 5)
                .map(cast => (
                <div className="credit" key={cast.id}>
                    <div className="img-area">
                        <img
                        loading="lazy"
                        className="profile"
                        src={cast.profile_path
                            ?`https://media.themoviedb.org/t/p/w138_and_h175_face/${cast.profile_path}`
                            :defaultProfileImage}
                        srcSet={cast.profile_path
                            ?`https://media.themoviedb.org/t/p/w138_and_h175_face/${cast.profile_path||defaultProfileImage} 1x, https://media.themoviedb.org/t/p/w276_and_h350_face/${cast.profile_path} 2x`
                            :defaultProfileImage}
                        alt={cast.name} />
                    </div>
                    <div className="name">
                        <strong>{cast.name}</strong>
                        <span>{cast.character}</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default MovieCreditsBox