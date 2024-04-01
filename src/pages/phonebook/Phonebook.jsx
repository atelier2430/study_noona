import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from '../../component/phonebook/ContactForm'
import ContactList from '../../component/phonebook/ContactList'

function Phonebook() {
  return (
    <Container className="phone-book-wrap">
      <h1>연락처</h1>
      <Row>
        <Col><ContactForm /></Col>
        <Col><ContactList /></Col>
      </Row>
    </Container>
  )
}

export default Phonebook