import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import RockPaperScissors from './pages/RockPaperScissors';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
    </Routes>
  );
}

export default App;
