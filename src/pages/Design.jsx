import React, {Suspense} from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const DesignContent = React.lazy(() =>  import('./DesignContent'))

function Design() {
  return (
    <div>
      <Header />
      <Navbar designSelected />
      <Suspense fallback={
        <div className='d-flex align-items-center justify-content-center'>
            <div className='text-muted' style={{fontSize: '17px'}}>
              Loading...
            </div>
        </div>
      }>
        <div>
          <DesignContent />
          <Footer />
        </div>
      </Suspense> 
    </div>
  );
}

export default Design;
