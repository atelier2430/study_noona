import React from 'react'
import { Row, Col } from 'react-bootstrap'

function ContactItem({contact}) {
  return (
    <Row className="contact-item">
      <Col lg={2}>
        <img src="https://pbs.twimg.com/media/FPOMFrwaQAAOWSc.jpg" alt="" />
      </Col>
      <Col lg={10}>
        <div className="name">{contact.name}</div>
        <div className="phone-number">{contact.phoneNumber}</div>
        <div className="email">{contact.email}</div>
      </Col>
    </Row>
  )
}

export default ContactItem