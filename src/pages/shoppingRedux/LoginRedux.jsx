import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authenciateAction from '../../redux/action/authenciateAction'

function LoginRedux() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // 로그인하고 home으로 이동
  const LoginUserRedux = () => {
    navigate('/hnm-redux')
    dispatch(authenciateAction.login(id, password))
  }

  return (
    <div className="hnm-login-box">
      <div className="input">
        <input
          type="text"
          placeholder="Email"
          name="userEmail"
          onChange={(e)=>setId(e.target.value)}
        />
      </div>
      <div className="input">
        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <label htmlFor="saveEmail" className="ckbox-area">
        <input type="checkbox" name="" id="saveEmail" />
        <span>아이디 저장하기</span>
      </label>
      <button type="button" className="btn-black" onClick={() => { LoginUserRedux() }}>Login</button>
    </div>
  )
}

export default LoginRedux
