import React from 'react';
import logoKasa from '../assets/logo-kasa-red.png';
import { Link, NavLink } from 'react-router-dom';


function Banner ({displayCover, displayTxt, bannerImg}) {
    return (
        <React.Fragment>
            <nav id='navBar'>
                <div className='logoHeader'>
                    <Link to="/" ><img src={logoKasa} alt="logo kasa"/></Link>
                </div>
                <ul className='linkNav'>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/about">À Propos</NavLink></li>   
                </ul>
            </nav>
            {/*afficher ou non la bannière avec image+txt:*/}
            {displayCover && (
            <div className='bannerCover'>
                <img src={bannerImg} className='bannerCover__img' alt="paysage de bord de mer"/>
                {displayTxt && <p className='bannerCover__txt'>Chez vous, partout et ailleurs</p>}
            </div>
            )}
        </React.Fragment>
    );
}

export default Banner;