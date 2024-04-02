const initialState={
  id: '',
  password: '',
  authenciate: false,
}

function authenciateReducer(state=initialState, action){
  const { type, payload } = action
  switch(type) {
    case 'LOGIN_SUCCESS':
      return {...state, id:payload.id, password:payload.password, authenciate:true };
    case 'LOGOUT_SUCCESS':
      return {...state, id:'', password:'', authenciate: false };
    default:
      return {...state};
  }
}

export default authenciateReducer