import React from 'react';
import {UsersType} from '../../api/api';
import './profile.scss';
import {rounding} from '../../utils/utils';
import followers from '../../assets/followers-icon.svg';
import following from '../../assets/following-icon.svg';

type PropsType = {
    userProfile: UsersType
}

function Profile({userProfile}: PropsType) {
    return <div className="profile">
        <div className="profile__avatar">
            <img alt="avatar" src={userProfile.avatar_url}/>
        </div>
        <p className="profile__user-name">{userProfile.name}</p>
        <a className="profile__user-login" href={userProfile.html_url} target="_blank" rel="noreferrer" >{userProfile.login}</a>
        <div className="profile__followers-container">
            <div className="profile__followers">
                <img className="profile__followers-icon" src={followers} alt=""/>
                <span className="profile__followers-description">{rounding(userProfile.followers)} followers</span>
            </div>
            <div className="profile__following">
                <img className="profile__following-icon" src={following} alt=""/>
                <span className="profile__following-description">{userProfile.following} following</span>
            </div>
        </div>
    </div>
}

export default Profile;
