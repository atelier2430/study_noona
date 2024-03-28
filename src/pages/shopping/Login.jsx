import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

function Login({ setIsLogin }) {
  const navigate = useNavigate()
  const [isPassword, setIsPassword] = useState(true)
  const [userEmail, setUserEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSaveUserEmail, setisSaveUserEmail] = useState(false)

  // 이미 저장된 이메일이 있으면 가져오기
  const getUserEmail = () => {
    const localStorageUserEmail = JSON.parse(localStorage.getItem('userEmail'));
    setUserEmail(localStorageUserEmail?.email || "");
  }

  // 이메일 input 값 받아오기
  const handleChangeEmailInput = (e) => {
    setUserEmail(e.target.value)
  }

  // 비밀번호 input 값 받아오기
  const handleChangePasswordInput = (e) => {
    setPassword(e.target.value)
  }

  // 이메일 저장하기 체크여부 확인
  const handleChangeSaveCheck = (e) => {
    setisSaveUserEmail(e.target.checked)
  }

  // 로컬스토리지에 사용자 이메일 저장하기
  const saveUserEmail = () => {
    const userEmailObj = { email: userEmail }
    window.localStorage.setItem("userEmail", JSON.stringify(userEmailObj))
  }

  // 로그인하고 home으로 이동
  const goToHome = () => {
    if (isSaveUserEmail) { saveUserEmail() }
    setIsLogin(true)
    navigate('/hnm')
  }

  useEffect(() => {
    getUserEmail()
  }, [])

  return (
    <div className="hnm-login-box">
      <div className="input">
        <input
          type="text"
          placeholder="Email"
          name="userEmail"
          value={userEmail}
          onChange={handleChangeEmailInput}
        />
      </div>
      <div className="input">
        <input
          type={isPassword ? 'password' : 'text'}
          placeholder="Password"
          value={password}
          onChange={handleChangePasswordInput}
        />
        <button type="button" className="icon password" onClick={() => setIsPassword(!isPassword)}>
          <FontAwesomeIcon icon={isPassword ? faEye : faEyeSlash} />
          <span>비밀번호 보기</span>
        </button>
      </div>
      <label htmlFor="saveEmail" className="ckbox-area">
        <input type="checkbox" name="" id="saveEmail" onChange={(e) => handleChangeSaveCheck(e)} />
        <span>아이디 저장하기</span>
      </label>
      <button type="button" className="login-btn" onClick={() => { goToHome() }}>Login</button>
    </div>
  )
}

export default Login
