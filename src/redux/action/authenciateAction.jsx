import { authenciateActions } from "../reducer/authenciateReducer"

function login(id, password){
  return (dispatch) => {
    dispatch(authenciateActions.login({id, password}))
  }
}

function logout(){
  return (dispatch) => {
    dispatch(authenciateActions.logout())
  }
}

const authenciateAction = { login, logout };

export default authenciateAction;