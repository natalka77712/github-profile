import React from 'react'
import {UserReposType, UsersType} from '../../api/api';
import Repository from '../repository/repository';
import './repository-page.scss';
import Paginator from '../paginator/paginator';
import {useSelector} from 'react-redux';
import {getPerPage} from '../../redux/selectors';

type PropsType = {
    userProfile: UsersType
    userRepositories: UserReposType | null
}

function RepositoryPage({userProfile, userRepositories}: PropsType) {
    const perPage = useSelector(getPerPage)

    let repository
    let totalCount = userProfile.public_repos

    if (userRepositories) {
        repository = userRepositories.map((r) =>
            <Repository key={r.id} hrefName={r.html_url} name={r.name} description={r.description}/>
        )
    }
    return (
        <div>
            <div className="repository-header">Repositories ({userProfile ? userProfile.public_repos : ''})
            </div>
            {repository}
            {totalCount > perPage &&
            <Paginator totalCount={userProfile.public_repos} />}
        </div>
    )
}

export default RepositoryPage;
