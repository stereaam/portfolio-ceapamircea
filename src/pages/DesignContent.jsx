import React from 'react'
const designPhotos = [];
for (let i = 1; i < 16; i += 1) {
  designPhotos.push(`/design/design-${i}.jpg`);
}
function DesignContent() {
  return (
    <div className='container'>
      <div className='row align-items-center justify-content-center'>
        {designPhotos.map((src, index) => {
          return <img
            className='col-4 p-0 m-0 m-md-1 p-md-1'
            style={(index === 9 || index === 10 || index === 11) ? { width: '360px', height: '440px' } : { width: '360px', height: '480px' }}
            key={index}
            src={src}
            alt="design"
            loading="lazy"/>;
        })}</div>

      </div>
  )
}

export default DesignContent