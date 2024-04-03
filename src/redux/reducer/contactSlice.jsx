import { createSlice } from '@reduxjs/toolkit'

const initialState={
  contactList: [
    { name: '홍길동', phoneNumber: '01012128989', email: 'hong@gmail.com' },
    { name: '김가네', phoneNumber: '01032325454', email: 'kim@gmail.com' },
    { name: '이가네', phoneNumber: '01067671313', email: 'lee@gmail.com' },
    { name: '박가네', phoneNumber: '01098980303', email: 'park@gmail.com' },
  ],
  searchResultContact: []
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact(state, action){
      // eslint-disable-next-line no-param-reassign
      state.contactList = [...state.contactList, { name: action.payload.name, phoneNumber: action.payload.phoneNumber, email: action.payload.email }]
    },
    searchContact(state, action){
      // eslint-disable-next-line no-param-reassign
      state.searchResultContact = action.payload.result
    }
  }
})

export const contactActions = contactSlice.actions
export default contactSlice.reducer