import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="footer_main">
                Copyright &copy;{new Date().getFullYear()}  <a href="http://workevr.com" target="_blank">Workevr.com</a>
            </div>
        </>
    )
}

export default Footer
