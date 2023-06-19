import React from 'react';
import { useState } from 'react';

function Carousel({ pictures, title }) {
  const [index, setIndex] = useState(0);
  const pictures_url = pictures[index];
  const allSlides = pictures.length;

  const leftClick = function () {
    if (index === 0) { //vérif. de la condition à chaque clic G//
      setIndex(allSlides - 1);// si index=0 on revient à la dernière image//
    } else {
      setIndex(index - 1);// sinon décrémentation de 1//
    }
  };

  const rightClick = function () {
    if (index >= allSlides - 1) { //vérif. de la condition à chaque clic D//
      setIndex(0); //index remis à 0//
    } else {
      setIndex(index + 1); //sinon incrémentation de 1//
    }
  };

  const slideCounter = (index + 1) + '/' + allSlides; //format du compteur de slides//
  return (
    <div>
      <div className="carousel">
          {allSlides > 1 && (
          <span className="arrow arrow-left" onClick={leftClick}><i className="fa-sharp fa-solid fa-chevron-left"></i></span>
          )}

          <img className="carousel__img" src={pictures_url} alt={title} />

          {allSlides > 1 && (
          <span className="arrow arrow-right" onClick={rightClick}><i className="fa-sharp fa-solid fa-chevron-right"></i></span>
          )}

          {allSlides > 1 && (
          <div className="counter-img">{slideCounter}</div> //affichage de la div si le nb de slides >0//
          )}
      </div>
    </div>
  );
}

export default Carousel;

