const initialState={
  count: 0,
  num: 0,
}

function reducer(state=initialState, action){
  switch(action.type) {
    case 'INCREMENT':
      return {...state, count: Math.min(20,state.count + action.payload.num)};
    case 'DECREMENT':
      return {...state, count: Math.max(-20, state.count - action.payload.num)};
    case 'COUNT_RESET':
      return {...state, count: 0};
    default:
      return {...state};
  }
}

export default reducer