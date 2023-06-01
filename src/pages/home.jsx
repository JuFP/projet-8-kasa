import datas from '../datas/data.json';
import React from 'react';
import Card from '../components/Card.jsx';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx'
import bannerHome from '../assets/banner-home.png';

const Home = () => {
    const myCards = datas.map((element, index) => (<Card key={index} title={element.title} cover={element.cover}/>));
    return (
        <React.Fragment>
            <div>
                <Banner displayCover={true} displayTxt={true} bannerImg={bannerHome}/>
            </div>
            <div>
                <div className="myCards">
                {myCards} 
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}
export default Home;