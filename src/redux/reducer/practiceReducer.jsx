const initialState={
  count: 0,
}

function contactReducer(state=initialState, action){
  const { type, payload } = action
  switch(type) {
    case 'INCREMENT':
      return {...state, count: Math.min(20,state.count + payload.num)};
    case 'DECREMENT':
      return {...state, count: Math.max(-20, state.count - payload.num)};
    case 'COUNT_RESET':
      return {...state, count: 0};
    default:
      return {...state};
  }
}

export default contactReducer