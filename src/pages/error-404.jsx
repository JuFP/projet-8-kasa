import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer'

const Error = () => {
    return (
        <div>
            <Banner displayCover={false}/>
            <div className="error">
                <p>404</p>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className='returnHome'>Retourner sur la page d'accueil</Link>
            </div>
            <Footer/>
        </div>
    );
}
export default Error;