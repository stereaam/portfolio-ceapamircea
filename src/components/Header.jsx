import React, {useState} from 'react'
import './Header.css'
import menuIcon from '../assets/menu-icon.png'


function Header() {
  const [navbarHeight, setNavbarHeight] = useState('0%')
  return (
    <>
   
      
      <nav
        style={{ backgroundColor: '#535353', borderBottom: '3px solid black', height: '55px', fontFamily: 'sans-serif' }}
        className='d-flex justify-content-center align-items-center'
      >
        
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className='navbar-content'>
            <a className="text-white" href="/">Mircea Ceapa</a>
          </div>
          <div className='navbar-hide navbar-content'>
            <a className="text-white" href="/">Home</a>
            <a className="text-white" href="/about">About</a>
            <a className="text-white" href="/contact">Contact</a>
          </div>
          <img
            style={{ width: '50px', color: 'white' }}
            className='p-1 m-1 menu-icon' src={menuIcon}
            alt="collapsed-menu-item"
            onClick={() => { if (navbarHeight === '0%') { setNavbarHeight('100%') } else { setNavbarHeight('0%')} }}
          />
        </div>
      </nav>
       <div className='navbar-overlay' style={{height: navbarHeight}}>
        <div className='navbar-overlay-content'>
          <a href="/" className="router-link-active router-link-exact-active category-active" aria-current="page">Home</a>
          <a href="/about" className="">About</a>
          <a href="/contact" className="">Contact</a>
        </div>
      </div></>

  )
}

export default Header