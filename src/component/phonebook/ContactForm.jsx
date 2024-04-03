import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { contactActions } from '../../redux/reducer/contactReducer';

function ContactForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault()
    dispatch(contactActions.addContact({name, phoneNumber, email}))
  }

  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="홍길동" onChange={(e) => setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="01012341234" onChange={(e) => setPhoneNumber(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이메일</Form.Label>
        <Form.Control type="text" placeholder="aaa@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  )
}

export default ContactForm