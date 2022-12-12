import React from 'react'
const applicationPhotos = [];
const applicationVideos = [];
for (let i = 1; i <10; i += 1) {
    if(i>5){
        applicationVideos.push(`/application/application-${i}.mp4`)
    } else {
        applicationPhotos.push(`/application/application-${i}.jpg`)
    }
}

function ApplicationContent() {
  return (
    <div className='container'>
          <div className='row align-items-center justify-content-center'>
              {applicationPhotos.map((src, index) => {
                  return <img className='col-6 p-0 m-0 m-md-1 p-md-1' style={(index === 0) ? { width: '1000px' } : { width: '500px' }} key={index} src={src} alt="application" />;
              })}

              {applicationVideos.map((src, index) => {
                  return <video controls className='col-6 p-0 m-0 m-md-1 p-md-1' style={{ width: '500px' }}
                      key={index} src={src} alt="application" />;
              })}

          </div>

      </div>
  )
}

export default ApplicationContent