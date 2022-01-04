import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import gitHubIcon from '../../assets/github-icon.svg';
import {useDispatch} from 'react-redux';
import './header.scss';
import {addSearchedUserAC, getUsersProfileThunk} from '../../redux/reducer';

function Header() {
    const dispatch = useDispatch()
    const [userText, setUserName] = useState("")

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
        dispatch(addSearchedUserAC(userText))
    }

    const handleSearchUser = (e: KeyboardEvent<HTMLInputElement>) => {
      if(e.key === "Enter") {
          dispatch(getUsersProfileThunk(userText))
      }
    }

    return (
        <div className="header">
            <div className="header__icon">
                <img src={gitHubIcon} alt="github-icon"/>
            </div>
            <div>
                <input placeholder="Enter GitHub username" value={userText} onChange={handleChange} onKeyPress={handleSearchUser}/>
            </div>
        </div>
    )
}

export default Header;
