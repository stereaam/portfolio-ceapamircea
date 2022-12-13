import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


function Navbar(props) {
  // eslint-disable-next-line react/prop-types
  const { designSelected, funktastikaSelected,applicationSelected, logosSelected } = props
  return (
    <div><ul className="nav justify-content-center"  style={{height:'40px'}}>
    <li className="nav-item">
      <Link className="nav-link active px-1 px-lg-4" aria-current="page" to="/design">
          <span className={designSelected?'selected':'menu-text'}>Design</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link  px-2 px-lg-4" to="/funktastika">
        <span className={funktastikaSelected?'selected':'menu-text'}>Funktastika</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link  px-2 px-lg-4" to="/application">
        <span className={applicationSelected?'selected':'menu-text'}>Applications</span>
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link  px-2 px-lg-4" to="/logos">
        <span className={logosSelected?'selected':'menu-text'}>Logos</span>
      </Link>
    </li>
    </ul></div>
    
  )
}

export default Navbar