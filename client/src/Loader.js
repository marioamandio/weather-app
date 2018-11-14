import React from 'react';
import './Loader.css'

const Loader = () => {
    return (
        <div className="loader">
            <svg className="loader-icon">">
                <use xlinkHref="/images/sprite.svg#icon-spinner9"></use>
            </svg>
        </div>
    );
};

export default Loader;