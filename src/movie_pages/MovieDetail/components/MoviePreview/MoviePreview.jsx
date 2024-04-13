import React, { useState } from 'react'
import { Alert , Button, Modal } from 'react-bootstrap'
import YouTube from 'react-youtube';
import LoadingComp from '../../../../component/common/Loading'
import useMovieVideoQuery from '../../../../hooks/useMovieVideo';
import './MoviePreview.style.css'

function MoviePreview({id, title}) {
    const { data, isLoading, isError, error } = useMovieVideoQuery({id})
    if(isLoading){
        <LoadingComp />
    }
    if(isError) {
        <Alert variant="danger">{error.message}</Alert>
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" className="preview-area" onClick={handleShow}>
            <div className="preview">예고편 보기</div>
        </Button>

        <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {data &&
                <YouTube
                    videoId={data.results[0].key}
                    className="video"
                    iframeClassName="iframe"
                />
            }
        </Modal.Body>
        </Modal>
        </>
    )
}

export default MoviePreview