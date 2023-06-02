import React from 'react';
import logoKasaWhite from '../assets/logo-kasa-white.png';
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <div className="footer">
            <div className='footer__img'>
                    <Link to="/" ><img src={logoKasaWhite} alt="kasa"/></Link>
                </div>
            <p className="footer__txt">© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;