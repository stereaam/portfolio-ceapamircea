import React from 'react'
import Design from './Design'
import Funktastika from './Funktastika'
import Application from './Application'
import Logos from './Logos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Design />} />
          <Route path='/design' element={<Design />} />
          <Route path='/funktastika' element={<Funktastika />} />
          <Route path='/application' element={<Application />} />
          <Route path='/logos' element={<Logos />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Home