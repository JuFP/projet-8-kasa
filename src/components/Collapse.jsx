import React, { useState } from 'react';

function Collapse({title, content}) {
    
    const [active, setActive] = useState(false);/* état de base fermé: */
    const openChevron = e => {
        setActive(!active)
    }
    return (
        <React.Fragment>
        <div className={`collapseAbout ${active && "active"}`}>
            <button className='collapseAbout__title' onClick={openChevron}>
                {title}
                <span className='collapseAbout__icon'><i className="fa-solid fa-chevron-up"></i></span>
            </button>
            <p className='collapseAbout__content'>{content}</p>
        </div>
        </React.Fragment>
    );
}

export default Collapse;