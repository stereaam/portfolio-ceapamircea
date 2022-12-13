import React from 'react'
import './FunktastikaContent.css'



const funktastikaPhotos = [];
const funktastikaVideos = [];
for (let i = 1; i <10; i += 1) {
    if(i>5){
        funktastikaVideos.push(`https://github.com/stereaam/portfolio-ceapamircea/blob/master/public/funktastika/funktastika-${i}.mp4?raw=true`)
    } else {
        funktastikaPhotos.push(`https://github.com/stereaam/portfolio-ceapamircea/blob/master/public/funktastika/funktastika-${i}.png?raw=true`)
    }
}

function FunktastikaContent() {
  return (
   <div className='container'>
          <div className='row align-items-center justify-content-center'>
              {funktastikaPhotos.map((src, index) => {
                  return <img className='col-4 p-0 m-0 m-md-1 p-md-1 image' key={index} src={src} alt="funktastika" />;
              })}

              {funktastikaVideos.map((src, index) => {
                  return <video controls className='col-4 p-0 m-0 m-md-1 p-md-1 image' 
                      key={index} src={src} alt="funktastika" />;
              })}

          </div>

      </div>
  )
}

export default FunktastikaContent