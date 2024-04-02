import React, { useRef }from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

function SearchBox() {
  const inputRef = useRef()
  const contactList = useSelector(state => state.contact.contactList) || []
  const dispatch = useDispatch()
  const searchContact = (e) => {
    let result = null;
    if(!e.key){
      result = contactList.filter(contact => contact.name.includes(inputRef.current.value))
    } else if (e.key === 'Enter') {
      result = contactList.filter(contact => contact.name.includes(e.target.value))
    } else {
      return;
    }
    dispatch({type: 'SEARCH_CONTACT', payload: { result }})
  }
  return (
    <Row className="search-box">
      <Col lg={9}>
        <input type="text" className="form-control" onKeyUp={searchContact} ref={inputRef}/>
      </Col>
      <Col lg={3}>
        <button type="button" className="btn btn-primary btn-search" onClick={searchContact}>검색</button>
      </Col>
    </Row>
  )
}

export default SearchBox