import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer.jsx'

const Error = () => {
    return (
        <React.Fragment>
            <Banner displayCover={false}/>
            <div className="error">
                <p>404</p>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className='returnHome'>Retourner sur la page d'accueil</Link>
            </div>
            <Footer/>
        </React.Fragment>
    );
}
export default Error;