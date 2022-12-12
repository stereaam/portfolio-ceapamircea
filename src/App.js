import './App.css';
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Home />
      <Router>
        <Routes>
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
      <Router>
        <Routes>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
