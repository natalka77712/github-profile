import React from 'react';
import initIcon from '../../assets/init-icon.svg';
import './init-page.scss';

const InitPage = () => (
    <div className="init-page">
        <img className="init-page__icon" src={initIcon} alt=""/>
        <p className="init-page__title">No data</p>
    </div>
);

export default InitPage;
