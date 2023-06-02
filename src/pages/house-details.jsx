import datas from '../datas/data.json';
import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer.jsx'
import Carousel from '../components/Carousel';

const HouseDetails = () => {
    const myCarousels = datas.map((element, index) => (<Carousel title={element.title} pictures={element.pictures}/>));
    return (
        <React.Fragment>
            <Banner displayCover={false}/>
            {myCarousels}
            <Footer/>
        </React.Fragment>
    );
}
export default HouseDetails;