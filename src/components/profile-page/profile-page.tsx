import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    getInitRepository,
    getPageNumber,
    getPerPage,
    getStatus,
    getUserProfile,
    getUserRepositories
} from '../../redux/selectors';
import {getUsersReposThunk} from '../../redux/reducer';
import Profile from '../profile/profile';
import Loader from '../loader/loader';
import RepositoryPage from '../repository-page/repository-page';
import './profile-page.scss';
import NoRepositoriesData from '../no-repositories-data/no-repositories-data';
import InitPage from '../init-page/init-page';


function ProfilePage() {
    const dispatch = useDispatch()
    const userProfile = useSelector(getUserProfile)
    const userRepositories = useSelector(getUserRepositories)
    const initRepository = useSelector(getInitRepository)
    const pageNumber = useSelector(getPageNumber)
    const perPage = useSelector(getPerPage)
    const status = useSelector(getStatus)

    useEffect(() => {
        if (userProfile) {
            dispatch(getUsersReposThunk(userProfile.login, perPage, pageNumber))
        }
    }, [userProfile, pageNumber, dispatch, perPage]);

    if (status ==='loading') {
        return <Loader/>
    }

    return (
        <div className="profile-page">
            {userProfile ? <>
                    <Profile userProfile={userProfile}/>
                    {initRepository ?
                        <Loader/>
                        : userRepositories && userRepositories?.length > 0 ?
                            <RepositoryPage userProfile={userProfile}
                                            userRepositories={userRepositories}
                                           />
                            : <NoRepositoriesData/>
                    }
                </>
                : <div className="profile-page__init-wrapper">
                    <InitPage/>
                </div>
            }
        </div>
    )
}

export default ProfilePage;
