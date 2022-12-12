import React from 'react'


const logosPhotos = [];
for (let i = 1; i < 6; i += 1) {
  logosPhotos.push(`https://github.com/stereaam/portfolio-ceapamircea/blob/master/public/logos/logo-${i}.png?raw=true`);
}

function LogosContent() {
  return (
   <div className='container my-3' >
      <div className='row align-items-center justify-content-center'>
        {logosPhotos.map((src, index) => {
          return <img
            className='col-4 p-1 m-1'
            style={(index === 4) ? { width: '500px' } : { width: '360px' }}
            key={index}
            src={src}
            alt="logos" />;
        })}</div>

    </div>
  )
}

export default LogosContent