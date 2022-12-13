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
          <Route path='/portfolio-ceapamircea/' exact element={<Design />} />
          <Route path='/portfolio-ceapamircea/design' element={<Design />} />
          <Route path='/portfolio-ceapamircea/funktastika' element={<Funktastika />} />
          <Route path='/portfolio-ceapamircea/application' element={<Application />} />
          <Route path='/portfolio-ceapamircea/logos' element={<Logos />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Home