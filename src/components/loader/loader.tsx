import React from 'react';
import './loader.scss';
import pulse from '../../assets/pulse.svg';

const Loader = () => {
    return (
        <div className="loader">
            <img src={pulse} alt=""/>
        </div>
    );
}

export default Loader;
