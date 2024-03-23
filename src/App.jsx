import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import RockPaperScissors from './pages/RockPaperScissors';
import RockPaperScissorsClass from './pages/RockPaperScissorsClass';
import Weather from './pages/Weather';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
      <Route path="/rock-paper-scissors-class" element={<RockPaperScissorsClass />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  );
}

export default App;
