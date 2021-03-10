import React from 'react'

import './Navbar.css'
import { Link } from 'react-router-dom'
import { GiFoodTruck } from 'react-icons/gi'

const Navbar = ({ toggle, isopen }) => {
    return(
        <div className="nav">
            <Link to='/login' className="navLink">Drop<span className="colorr">-Food</span></Link>
                <div className="navIcon">
                    <div className="pMenu">Menu</div>
                    <GiFoodTruck size='2rem' className="GiFoodTruck" onClick={toggle} isopen={isopen}/>
                </div>
        </div>
    )
}

export default Navbar