import datas from '../datas/data.json';
import React from 'react';
// import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer.jsx'
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';

const HouseDetails = () => {

  const myCarousel = datas[0];

    
    return (
        <React.Fragment>
            <Banner displayCover={false}/>
            <Carousel pictures={myCarousel.pictures}/>


            <div className='detailsArea'>
                <div className='detailsArea__txt'>
                    <h1>{datas[0].title}</h1>
                    <p>{datas[0].location}</p> 
                    <div>
                        Les Tags 
                    </div>
                </div>
                <div className='detailsArea__host'>
                    <div className='detailsArea__host--pic'>
                        <p>{datas[0].host.name}</p>
                        <img src="" alt="" />  
                    </div>
                    <div className='detailsArea__host--notation'>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>

            </div>
            <div className='collapsesArea'>
                <div className='collapse-details'>
                    <Collapse title="Description" content={datas[0].title}/>
                </div>
                <div className='collapse-details'>
                    <Collapse title="Equipements" content={datas[0].equipments}/> 
                </div>
                
            </div>
        

            <Footer/>
        </React.Fragment>
    );
}
export default HouseDetails;