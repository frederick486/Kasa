import React from 'react'
import logo from '../../Assets/logo_footer.png'
import './footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer__text">
            © 2020 Kasa. All rights reserved
        </div>
    </div>
  )
}

export default Footer
