import React from 'react'
import Design from './Design'
import Funktastika from './Funktastika'
import Application from './Application'
import Logos from './Logos'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Design />} />
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