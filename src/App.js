import './App.css';
import React from 'react';
import Home from './pages/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Home />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

    </div>
  );
}

export default App;
