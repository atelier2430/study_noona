import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import RockPaperScissors from './pages/RockPaperScissors';
import RockPaperScissorsClass from './pages/RockPaperScissorsClass';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
      <Route path="/rock-paper-scissors-class" element={<RockPaperScissorsClass />} />
    </Routes>
  );
}

export default App;
