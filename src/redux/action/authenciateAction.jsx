function login(id, password){
  return (dispatch) => {
    dispatch({type:"LOGIN_SUCCESS", payload: {id, password}})
  }
}

function logout(){
  return (dispatch) => {
    dispatch({type:"LOGOUT_SUCCESS"})
  }
}

const authenciateAction = { login, logout };

export default authenciateAction;