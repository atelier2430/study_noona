import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/project05_movie/logo.svg'


function MovieAppLayout() {
  const [keyword, setKeyword] = useState()
  const navigate = useNavigate()

  const searchByKeyword = (e) => {
    e.preventDefault()
    navigate(`movies?q=${keyword}`)
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
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Button variant="outline-danger" onClick={searchByKeyword}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default MovieAppLayout;