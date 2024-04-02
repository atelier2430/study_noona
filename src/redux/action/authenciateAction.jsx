function login(id, password){
  return (dispatch, getState) => {
    dispatch({type:"LOGIN_SUCCESS", payload: {id, password}})
    console.log(getState)
  }
}

const authenciateAction = { login };

export default authenciateAction;