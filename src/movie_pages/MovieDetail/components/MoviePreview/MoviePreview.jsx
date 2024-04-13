import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import './MoviePreview.style.css'

function MoviePreview({movie}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    console.log(movie)
    return (
        <>
        <Button variant="primary" className="preview-area" onClick={handleShow}>
            <div className="preview">예고편 보기</div>
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        </Modal>
        </>
    )
}

export default MoviePreview