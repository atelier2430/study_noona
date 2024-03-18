import './App.css';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import RockPaperScissors from './pages/RockPaperScissors';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Index />}></Route>
      <Route path='/rock-paper-scissors' element={<RockPaperScissors />}></Route>
    </Routes>
  );
}

export default App;
