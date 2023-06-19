import datas from '../datas/data.json';
import { Link } from 'react-router-dom';
import React from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner';
import Footer from '../components/Footer'
import bannerHome from '../assets/banner-home.png';

const Home = () => {
  
    const myCards = datas.map((element, index) => (
      <Link key={index} to={`/house-details/${element.id}`}>
        <Card title={element.title} cover={element.cover}/>
      </Link>
    ));
  
    return (
      <div>
        <div>
          <Banner displayCover={true} displayTxt={true} bannerImg={bannerHome} />
        </div>
        <div className="myCards">
          {myCards}</div>
        <Footer />
      </div>
    );
  };

export default Home;