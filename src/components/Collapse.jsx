import React from 'react';
import { useState } from 'react';

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
                <span className='collapse__icon'><i className="fa-solid fa-chevron-down"></i></span>
            </button>
            <p className='collapse__content'>{content}</p>
        </div>
        </React.Fragment>
    );
}

export default Collapse;