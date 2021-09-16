import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
     const [isMobile, setIsMobile] = useState(false);
     
return (
        <>
            <nav className="navbar">
                <label className="logo">
                    TR
                </label>
                {/* <button className="mobile-menu-icon">
                    {isMobile ? <i className="fas fa-times" /> : <i className="fas fa-bars"/>}
                </button> */}
                <ul className={isMobile ? 'mobile-links' : 'list'}>
                    <li className="item4">Home</li>
                    <li className="item1">About Us</li>
                    <li className="item2">Contact Us</li>
                    <li className="item3">Services</li>
                </ul>
            
            </nav>
        </>
    )
}

export default Navbar
