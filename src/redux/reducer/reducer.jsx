const initialState={
  count: 0,
  num: 0,
  contactList: [
    { name: '홍길동', phoneNumber: '01012128989', email: 'hong@gmail.com' },
    { name: '김가네', phoneNumber: '01032325454', email: 'kim@gmail.com' },
    { name: '이가네', phoneNumber: '01067671313', email: 'lee@gmail.com' },
    { name: '박가네', phoneNumber: '01098980303', email: 'park@gmail.com' },
  ],
  searchResultContact: []
}

function reducer(state=initialState, action){
  const { type, payload } = action
  switch(type) {
    case 'INCREMENT':
      return {...state, count: Math.min(20,state.count + payload.num)};
    case 'DECREMENT':
      return {...state, count: Math.max(-20, state.count - payload.num)};
    case 'COUNT_RESET':
      return {...state, count: 0};
    case 'ADD_CONTACT':
      return {...state, contactList: [...state.contactList, { name: payload.name, phoneNumber: payload.phoneNumber, email: payload.email }]};
    case 'SEARCH_CONTACT':
      return {...state, searchResultContact: payload.result};
    default:
      return {...state};
  }
}

export default reducer