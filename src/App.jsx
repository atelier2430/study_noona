import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import Index from './pages/Index';
import RockPaperScissors from './pages/RockPaperScissors';
import RockPaperScissorsClass from './pages/RockPaperScissorsClass';
import Weather from './pages/Weather';

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
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        <Route path="/rock-paper-scissors-class" element={<RockPaperScissorsClass />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
