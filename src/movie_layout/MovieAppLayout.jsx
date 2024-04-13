import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Logo from '../assets/images/project05_movie/logo.svg'
import MicImageOn from '../assets/images/project05_movie/voice-recorder-on.png'
import MicImageOff from '../assets/images/project05_movie/voice-recorder-off.png'


function MovieAppLayout() {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (keyword) {
      navigate(`movies?q=${keyword}`);
    }
  }, [keyword, navigate]);

  const searchByKeyword = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`movies?q=${keyword}`);
    }
  };

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn`&apos;t support speech recognition.</span>;
  }

  const stopListeningAndSetKeyword = () => {
    SpeechRecognition.stopListening();
    setKeyword(transcript);
  }


  return (
    <div className="movie-page">
      <Navbar
      expand="lg"
      className="movie-nav"
      bg="dark"
      data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Brand href="/movie">
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/movie">Home</Nav.Link>
              <Nav.Link href="/movie/movies">Movies</Nav.Link>
            </Nav>
            <div className="voice-search-area">
              <div className="microphone">
                {listening
                ? <img src={MicImageOn} alt="microphone"/>
                : <img src={MicImageOff} alt="microphone"/>}
              </div>
              <button type="button" onClick={SpeechRecognition.startListening}>Start</button>
              <button type="button" onClick={stopListeningAndSetKeyword}>Stop</button>
            </div>
            <Form className="d-flex search-form" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Button type="submit" variant="outline-danger" onClick={searchByKeyword}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default MovieAppLayout;