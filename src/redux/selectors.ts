import {AppRootStateType} from './store';
import {UserReposType, UsersType} from '../api/api';
import {StatusType} from './reducer';

export const getUserProfile = (state: AppRootStateType): null | UsersType => {
    return state.profilePage.userProfile
}

export const getUserRepositories = (state: AppRootStateType): null | UserReposType => {
    return state.profilePage.userRepositories
}

export const getInitRepository = (state: AppRootStateType): boolean => {
    return state.profilePage.initRepository
}

export const getPageNumber = (state:AppRootStateType):number => {
    return state.profilePage.pageNumber
}

export const getPerPage =(state:AppRootStateType):number => {
    return state.profilePage.perPage
}

export const getStatus =(state:AppRootStateType): StatusType => {
    return state.profilePage.status
}

export const setError =(state:AppRootStateType): null | string => {
    return state.profilePage.error
}
