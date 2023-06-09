import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Collapse({title, content}) {
    
    const [active, setActive] = useState(false);/* état de base fermé: */
    const openChevron = e => {
        setActive(!active)
    }
    return (
        <React.Fragment>
        <div className={`collapse ${active && "active"}`}>
            <button className='collapse__title' onClick={openChevron}>
                {title}
                <span className='collapse__icon'><i className="fa-solid fa-chevron-up"></i></span>
            </button>
            <p className='collapse__content'>{content}</p>
        </div>
        </React.Fragment>
    );
}
Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}
export default Collapse;