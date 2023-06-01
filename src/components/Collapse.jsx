import React from 'react';

function Collapse({title, content}) {

    return (
        <React.Fragment>
        <div className='collapse'>
            <button className='collapse__title'>
                {title}
                <i className="fa-solid fa-chevron-down"></i>
            </button>
            <p className='collapse__content'>{content}</p>
        </div>
        </React.Fragment>
    );
}

export default Collapse;