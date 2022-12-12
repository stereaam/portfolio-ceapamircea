import React from 'react'

function Footer() {
  return (
    <div 
        className='text-white d-flex justify-content-center align-items-center'
        style={{height:'27px', backgroundColor: '#535353', borderTop: '3px solid black'}}> 
        <div className='mb-1' style={{fontSize:'12px'}}>All images copyright <span>&copy;</span> Mircea Ceapa 2023</div>
    </div>
  )
}

export default Footer