import React, {Suspense} from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
const FunktastikaContent = React.lazy(()=> import ('./FunktastikaContent'))
function Funktastika() {
  return (
    <><Header /><Navbar funktastikaSelected/>
          <Suspense fallback={
        <div className='d-flex align-items-center justify-content-center'>
            <div className='text-muted' style={{fontSize: '17px'}}>
              Loading...
            </div>
        </div>
      }>
        <div>
          <FunktastikaContent />
          <Footer />
        </div>
      </Suspense> </>
  );
}

export default Funktastika;
