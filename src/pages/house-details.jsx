import datas from '../datas/data.json';
import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer.jsx'
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';

const HouseDetails = () => {

    const routeParams = useParams();
    const found = datas.find(element => element.id === routeParams.id); // recherche des éléments en fonction de leur id//
    const notation = []; // tableau qui va stocker le nb d'icones//
    
    const flatTags = found.tags.map ((tag, index) => (
        <p key={index} className='flatTags'>{tag}</p>
    )) ; // génération d'un p pour chaque élément du tableau tags//
    const equipmentsList = found.equipments.map ((equipment, index) => (
        <p key={index} className='equipment'>{equipment}</p>
    )) ; // génération d'un p pour chaque élément du tableau equipments//



    if (found && found.rating) { // trouver l'object rating//
    for (
        let i = 0; //compteur initié à 0//
        i < found.rating; i++) { //tant que i est < à la valeur de rating, incrémentation//
        notation.push(<i key={i} className="fa-solid fa-star"></i> ); //ajout d'un <i à chaque boucle//
        }
    }

    return (
        <React.Fragment>
            <Banner displayCover={false}/>
            <Carousel pictures={found.pictures}/>
            <div className='detailsArea'>
                <div className='detailsArea__txt'>
                    <h1>{found.title}</h1>
                    <p>{found.location}</p> 
                    <div className='flatTagsArea'>
                       {flatTags}
                    </div>
                </div>
                <div className='detailsArea__host'>
                    <div className='detailsArea__host--pic'>
                        <p>{found.host.name}</p>
                        <img className='pic' src={found.host.picture} alt={found.host.name} />  
                    </div>
                    <div className='detailsArea__host--notation'>
                        {notation}
                    </div>
                </div>
            </div>
            <div className='collapsesArea'>
                <div className='collapse-details'>
                    <Collapse title="Description" content={<p className='flatDescription'>{found.description}</p>}/>
                </div>
                <div className='collapse-details'>
                    <Collapse title="Equipements" content={equipmentsList}/> 
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}
export default HouseDetails;