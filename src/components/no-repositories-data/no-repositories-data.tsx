import React from 'react';
import noRepo from '../../assets/no-repo-icon.svg';
import './no-repositories-data.scss';

const NoRepositoriesData = () => (
    <div className="repo-not-found">
        <img className="repo-not-found__icon" src={noRepo} alt=""/>
        <p className="repo-not-found__title">Repository list is empty</p>
    </div>
);

export default NoRepositoriesData;
