import React from 'react';
function Card ({title, cover}) {
    return (
        <div className="card">
            <h2 className="myCards__title">{title}</h2>
            <img className="myCards__thumbnail" src={cover} alt={title}/>
        </div>
    );
}

export default Card;