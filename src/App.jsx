import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Game from './componentes/Game';
import Nabvar from "./componentes/Nadvar"

function App(){
  return (
    <Router>
      <Nabvar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
};

export default App