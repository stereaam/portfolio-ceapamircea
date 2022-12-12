import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import locationIcon from '../assets/location.png'
import phoneIcon from '../assets/phone.png'
import mailIcon from '../assets/mail.png'
import artStationIcon from '../assets/art-station.png'


function Contact() {
    return (
       <div style={{height:'100vh'}}><Header /><div className='d-flex flex-column justify-content-center' style={{minHeight:'90%'}}>

            <div className='d-flex align-items-center justify-content-start justify-content-md-center'>
                <div className='p-2 d-flex justify-content-center flex-column align-items-start text-truncate'>
                    <div>
                        <img src={locationIcon} className='px-1' style={{ width: '38px' }} alt="location-icon" /> Bucuresti, Sector 3
                    </div>
                    <div>
                        <img src={phoneIcon} className='px-1' style={{ width: '38px' }} alt="phone-icon" /> +40735784478
                    </div>
                    <div>
                        <img src={mailIcon} className='px-1' style={{ width: '35px' }} alt="email-icon" /> mirceaceapa1998@gmail.com
                    </div>
                    <div className='text-truncate'>
                        <img src={artStationIcon} className='px-1 text-truncate' style={{ width: '39px' }} alt="email-icon" />
                        <a className='text-truncate' href="https://www.artstation.com/mirceaceapa9" style={{ textDecoration: 'none' }}> https://www.artstation.com/mirceaceapa9</a>
                    </div>
                </div>
            </div>

            
        </div><Footer /></div>
  )
}

export default Contact