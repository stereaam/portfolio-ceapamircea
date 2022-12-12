import React,{Suspense} from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
const LogosContent = React.lazy(()=>import ('./LogosContent'))
function Logos() {
  return (
    <div><Header /><Navbar logosSelected />
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
