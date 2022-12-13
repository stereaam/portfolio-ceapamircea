import React,{Suspense, useState} from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
const LogosContent = React.lazy(() => import('./LogosContent'))


  

function Logos() {
  const [scrollable, setScrollable] = useState(true)
  return (
    <div style={scrollable?{ height: '100vh'}:{ height: '100vh', overflow: 'hidden'}} className='d-flex flex-column justify-content-between'>
      
      <div><Header setScrollable={setScrollable} /><Navbar logosSelected /></div>
     <Suspense fallback={
        <div className='d-flex align-items-center justify-content-center'>
            <div className='text-muted' style={{fontSize: '17px'}}>
              Loading...
            </div>
        </div>
      }>
 
          <div>
          <LogosContent />
          <Footer />
          </div>
        
      </Suspense></div>
  );
}

export default Logos;
