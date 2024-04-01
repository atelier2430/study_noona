import React from 'react'
import { useSelector } from 'react-redux'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'

function ContactList() {
  const contactList = useSelector(state=>state.contactList)
  const searchResultContact = useSelector(state=>state.searchResultContact)
  
  return (
    <div>
      <SearchBox />
      {searchResultContact.length > 0
      ? searchResultContact.map(contact => <ContactItem key={contact.name} contact={contact}/>)
      : contactList.map(contact => <ContactItem key={contact.name} contact={contact}/>)}
    </div>
  )
}

export default ContactList