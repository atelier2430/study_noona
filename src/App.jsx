import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import Index from './pages/Index';
import RockPaperScissors from './pages/RockPaperScissors';
import RockPaperScissorsClass from './pages/RockPaperScissorsClass';
import Weather from './pages/Weather';
import Header from './component/shopping/Header';
import Login from './component/shopping/Login';
import ProductAll from './component/shopping/ProductAll';
import ProductDetail from './component/shopping/ProductDetail';

function App() {
  const location = useLocation();
  const { pathname } = location;
  const [currPathName, SetCurrPathName] = useState('')

  useEffect(() => {
    SetCurrPathName(pathname)
  },[location])

  return (
    <div>
      {/* 홈을 제외하고 뒤로가기 출력 */}
      {currPathName !== "/" && <Link to="/" className="back" />}
      {/* hnm 쇼핑몰 일때만 Header 출력 */}
      {currPathName.includes('hnm') && <Header />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        <Route path="/rock-paper-scissors-class" element={<RockPaperScissorsClass />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/hnm/" element={<ProductAll />} />
        <Route path="/hnm/login" element={<Login />} />
        <Route path="/hnm/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
