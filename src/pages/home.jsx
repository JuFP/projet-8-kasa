import datas from '../datas/data.json';
import { Link } from 'react-router-dom';
import React from 'react';
import Card from '../components/Card.jsx';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx'
import bannerHome from '../assets/banner-home.png';

const Home = () => {
  
    const myCards = datas.map((element, index) => (
      <Link key={index} to={`/house-details/${index}`}>
        <Card title={element.title} cover={element.cover}/>
      </Link>
    ));
  
    return (
      <React.Fragment>
        <div>
          <Banner displayCover={true} displayTxt={true} bannerImg={bannerHome} />
        </div>
        <div>
          <div className="myCards">{myCards}</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  };

export default Home;