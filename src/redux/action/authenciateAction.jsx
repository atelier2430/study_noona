function login(id, password){
  return (dispatch, getState) => {
    dispatch({type:"LOGIN_SUCCESS", payload: {id, password}})
    console.log(getState)
  }
}

function logout(){
  return (dispatch, getState) => {
    dispatch({type:"LOGOUT_SUCCESS"})
    console.log(getState)
  }
}

const authenciateAction = { login, logout };

export default authenciateAction;