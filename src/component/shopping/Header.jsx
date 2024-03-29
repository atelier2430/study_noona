import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo'

function Header({isLogin, setIsLogin, setQuery, setAuthenticate}) {
  const navigate = useNavigate()
  const menuList = [
    { id: 'header1', params: '/hnm', title: 'Women' },
    { id: 'header2', params: '/hnm', title: 'Men' },
    { id: 'header3', params: '/hnm', title: 'Baby' },
    { id: 'header4', params: '/hnm', title: 'Kids' },
    { id: 'header5', params: '/hnm', title: 'H&M HOME' },
    { id: 'header6', params: '/hnm', title: 'Sport' },
    { id: 'header7', params: '/hnm', title: 'Sale' },
    { id: 'header8', params: '/hnm', title: '지속가능성' },
  ]

  const recommSearchList = ['와이드', '진', '드레스']

  const goToLogin = () => {
    if(isLogin) {
      setIsLogin(false)
    }
    
    navigate('/hnm/login')
  }

  const goToLoginNoona = () => {
    if(isLogin) {
      setAuthenticate(false)
    }
    
    navigate('/hnm/login-noona')
  }

  const goToHome = () => {
    navigate('/hnm')
  }

  const onClickRecommSearch = (word) => {
    setQuery(`q=${word}`)
  }

  return (
    <div className="hnm-header">
      <button type="button" className="login-area" onClick={()=>goToLogin()}>
        <FontAwesomeIcon icon={faUser} />
        <span>{isLogin ? '로그아웃' : '로그인'}</span>
      </button>
      <button type="button" className="login-area noona" onClick={()=>goToLoginNoona()}>
        <FontAwesomeIcon icon={faUser} />
        <span>{isLogin ? '로그아웃 누나ver' : '로그인 누나ver'}</span>
      </button>
      <button type="button" className="logo-area" onClick={() => goToHome()}>
        <Logo />H&M
      </button>
      <div className="menu-area">
        <div className="col menu">
          <ul className="menu-list">
            {menuList && menuList.map((menu)=> <li key={menu.id}><Link to="/hnm" className="menu">{menu.title}</Link></li>)}
          </ul>
        </div>
        <div className="col search">
          <div className="input-area">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="검색"/>
          </div>
          <div className="recomm-search">
            {recommSearchList.map(recomm => (
              <button type="button" key={recomm} className="recomm" onClick={()=>onClickRecommSearch(recomm)}>{recomm}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header