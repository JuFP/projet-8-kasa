import React from 'react';
import PropTypes from 'prop-types';

function Card ({title, cover}) {
    return (
        <div className="card">
            <h2 className="myCards__title">{title}</h2>
            <img className="myCards__thumbnail" src={cover} alt={title}/>
        </div>
    );
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}
export default Card;