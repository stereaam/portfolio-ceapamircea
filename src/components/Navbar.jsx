import React from 'react'
import './Navbar.css'


function Navbar(props) {
  // eslint-disable-next-line react/prop-types
  const { designSelected, funktastikaSelected,applicationSelected, logosSelected } = props
  console.log(designSelected)
  return (
    <div><ul className="nav justify-content-center"  style={{height:'40px'}}>
    <li className="nav-item">
      <a className="nav-link active px-1 px-lg-4" aria-current="page" href="/portfolio-ceapamircea/design">
          <span className={designSelected?'selected':'menu-text'}>Design</span>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link  px-2 px-lg-4" href="/portfolio-ceapamircea/funktastika">
        <span className={funktastikaSelected?'selected':'menu-text'}>Funktastika</span>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link  px-2 px-lg-4" href="/portfolio-ceapamircea/application">
        <span className={applicationSelected?'selected':'menu-text'}>Applications</span>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link  px-2 px-lg-4" href="/portfolio-ceapamircea/logos">
        <span className={logosSelected?'selected':'menu-text'}>Logos</span>
      </a>
    </li>
    </ul></div>
    
  )
}

export default Navbar