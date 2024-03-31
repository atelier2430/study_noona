import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import Index from './pages/Index';
import RockPaperScissors from './pages/rockPaperScissors/RockPaperScissors';
import RockPaperScissorsClass from './pages/rockPaperScissors/RockPaperScissorsClass';
import Weather from './pages/weather/Weather';
import Header from './component/shopping/Header';
import Login from './pages/shopping/Login';
import LoginNoona from './pages/shopping/LoginNoona';
import ProductAll from './pages/shopping/ProductAll';
import PrivateRoute from './route/PrivateRoute';
import Redux from './pages/redux/Redux';

function App() {
  const location = useLocation();
  const { pathname } = location;
  const [currPathName, SetCurrPathName] = useState('')
  const [isLogin, setIsLogin] = useState(false)
  const [authenticate, setAuthenticate] = useState(false)

  useEffect(() => {
    SetCurrPathName(pathname)
  },[location])

  // 로그인 상태 가져오기
  const getIsLogin = () => {
    const localStorageIsLogin = JSON.parse(localStorage.getItem('isLogin'));
    setIsLogin(localStorageIsLogin || "");
  }

  useEffect(()=>{
    getIsLogin()
  },[])

  return (
    <div>
      {/* 홈을 제외하고 뒤로가기 출력 */}
      {currPathName !== "/" && <Link to="/" className="back">과제 목록으로 돌아가기</Link>}
      {/* hnm 쇼핑몰 일때만 Header 출력 */}
      {currPathName.includes('hnm') && (
        <Header
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          authenticate={authenticate}
          setAuthenticate={setAuthenticate}
          />
      )}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        <Route path="/rock-paper-scissors-class" element={<RockPaperScissorsClass />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/hnm" element={<ProductAll />} />
        <Route path="/hnm/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/hnm/login-noona" element={<LoginNoona setAuthenticate={setAuthenticate}/>} />
        <Route path="/hnm/product/:id" element={<PrivateRoute isLogin={isLogin}/>} />
        <Route path="/redux" element={<Redux />} />
      </Routes>
    </div>
  );
}

export default App;
