import React from 'react'
import './DesignContent.css'


const designPhotos = [];
for (let i = 1; i < 16; i += 1) {
  designPhotos.push(`https://github.com/stereaam/portfolio-ceapamircea/blob/master/public/design/design-${i}.jpg?raw=true`);
}
function DesignContent() {
  return (
    <div className='container'>
      <div className='row align-items-center justify-content-center pt-2'>
        {designPhotos.map((src, index) => {
          
          return <img
            className={(index === 9 || index === 10 || index === 11) ? 'col-4 p-0 m-0 m-md-1 p-md-1 image-w-sm': 'col-4 p-0 m-0 m-md-1 p-md-1 image' }
            key={index}
            src={src}
            alt={"Loading..."}
          />;
        })}</div>

      </div>
  )
}

export default DesignContent