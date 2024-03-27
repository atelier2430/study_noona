import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo'

function Header() {
  const menuList = [
    { id: 1, params: '/hnm', title: '여성' },
    { id: 2, params: '/hnm', title: 'Divided' },
    { id: 3, params: '/hnm', title: '남성' },
    { id: 4, params: '/hnm', title: '신생아/유아' },
    { id: 5, params: '/hnm', title: '아동' },
    { id: 6, params: '/hnm', title: 'H&M HOME' },
    { id: 7, params: '/hnm', title: 'Sale' },
    { id: 8, params: '/hnm', title: '지속가능성' },
  ]
  return (
    <div className="hnm-header">
      <div className="login-area">
        <FontAwesomeIcon icon={faUser} />
        <span>로그인</span>
      </div>
      <div className="logo-area">
        <Logo />
      </div>
      <div className="menu-area">
        <div className="col menu">
          <ul className="menu-list">
            {menuList && menuList.map((menu)=> <li key={menu.key}><Link to="/hnm" className="menu">{menu.title}</Link></li>)}
          </ul>
        </div>
        <div className="col search">
          <div className="input-area">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="검색"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header