import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import LogoRedux from './LogoRedux';
import authenciateAction from '../../redux/action/authenciateAction';

function HeaderRedux() {
  const dispatch = useDispatch()
  const authenciate = useSelector(state=>state.auth.authenciate)
  const [openMoMenu, setOpenMoMenu] = useState(false)
  const searchInputRef = useRef()
  const [searchValue, setSearchValue] = useState(null)
  const navigate = useNavigate()
  const menuList = [
    { id: 'header1', params: '/hnm-redux', title: 'Women' },
    { id: 'header2', params: '/hnm-redux', title: 'Men' },
    { id: 'header3', params: '/hnm-redux', title: 'Baby' },
    { id: 'header4', params: '/hnm-redux', title: 'Kids' },
    { id: 'header5', params: '/hnm-redux', title: 'H&M HOME' },
    { id: 'header6', params: '/hnm-redux', title: 'Sport' },
    { id: 'header7', params: '/hnm-redux', title: 'Sale' },
    { id: 'header8', params: '/hnm-redux', title: '지속가능성' },
  ]

  const recommSearchList = ['와이드', '진', '드레스']

  const toggleMoMenu = () => {
    setOpenMoMenu(!openMoMenu)
  }

  const loginout = () => {
    console.log(authenciate)
    if(authenciate){
      dispatch(authenciateAction.logout())
    } else {
      navigate('/hnm-redux/login')
    }
  }

  const onClickRecommSearch = (word) => {
    searchInputRef.current.focus();
    setSearchValue('');
    setSearchValue(word);
    navigate(`/hnm-redux/?q=${word}`)
  }

  const search = (e) => {
    if(e.key === "Enter" || e.keyCode === 13){
      navigate(`/hnm-redux/?q=${e.target.value}`)
    }
  }

  return (
    <div className="hnm-header">
      <button type="button" className="login-area" onClick={()=>loginout()}>
        <FontAwesomeIcon icon={faUser} />
        <span>{authenciate ? '로그아웃' : '로그인'}</span>
      </button>
      <button type="button" className="logo-area" onClick={() => navigate('/hnm-redux')}>
        <LogoRedux />H&M
      </button>
      <div className="menu-area">
        <div className={`col menu ${openMoMenu?'open':''}`}>
          <button type="button" className="btn-menu" onClick={() => toggleMoMenu()}>
            <FontAwesomeIcon icon={faBars}/>
            <span>모바일메뉴</span>
          </button>
          <ul className="menu-list">
            {menuList && menuList.map((menu)=> <li key={menu.id}><Link to="/hnm-redux" className="menu">{menu.title}</Link></li>)}
          </ul>
        </div>
        <div className="col search">
          <div className="input-area">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              ref={searchInputRef} 
              type="text"
              placeholder="검색"
              defaultValue={searchValue || ''}
              onKeyUp={(e) => search(e)}
              />
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

export default HeaderRedux