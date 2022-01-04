import {UserReposType, usersApi, UsersType} from '../api/api';
import {Dispatch} from 'redux';
import {handleServerNetworkError} from '../utils/utils';

export enum ACTIONS_TYPE {
    ADD_USER_PROFILE = 'profileReducer/ADD_USER_PROFILE',
    ADD_USER_REPOSITORIES = 'profileReducer/ADD_USER_REPOSITORIES',
    ADD_SEARCHED_USER = 'profileReducer/ADD_SEARCHED_USER',
    SET_INIT_REPOSITORY = 'profileReducer/SET_INIT_REPOSITORY',
    CHANGE_STATUS = 'profileReducer/CHANGE_STATUS',
    SET_ERROR = 'profileReducer/SET_ERROR',
    SET_PAGE_NUMBER = 'profileReducer/SET_PAGE_NUMBER'
}

export type StatusType = 'idle' | 'loading' | 'success' | 'failed'

const InitialStateType = {
    status: 'idle' as StatusType,
    searchedUser: "",
    userProfile: null as null | UsersType,
    userRepositories: null as null | UserReposType,
    perPage: 4,
    pageNumber: 1,
    initRepository: false,
    error: null as null | string,
}

type InitialStateType = typeof InitialStateType

export const profileReducer = (state: InitialStateType = InitialStateType, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_USER_PROFILE:
            return {...state, userProfile: action.userProfile}
        case ACTIONS_TYPE.ADD_USER_REPOSITORIES:
            return {...state, userRepositories: action.userRepositories}
        case ACTIONS_TYPE.ADD_SEARCHED_USER:
            return {...state, searchedUser: action.searchText}
        case ACTIONS_TYPE.SET_INIT_REPOSITORY:
            return {...state, initRepository: action.initRepository}
        case ACTIONS_TYPE.CHANGE_STATUS:
            return {...state, status: action.value}
        case ACTIONS_TYPE.SET_ERROR:
            return {...state, error: action.error}
        case ACTIONS_TYPE.SET_PAGE_NUMBER:
            return {...state, pageNumber: action.value}
        default:
            return state
    }
}

export const addUserProfileAC  = (userProfile: UsersType | null) => ({type: ACTIONS_TYPE.ADD_USER_PROFILE, userProfile} as const)
export const addUserRepositoriesAC  = (userRepositories: UserReposType | null) => ({type: ACTIONS_TYPE.ADD_USER_REPOSITORIES, userRepositories} as const)
export const addSearchedUserAC  = (searchText: string) => ({type: ACTIONS_TYPE.ADD_SEARCHED_USER, searchText} as const)
export const setInitRepositoryAC  = (initRepository: boolean) => ({type: ACTIONS_TYPE.SET_INIT_REPOSITORY, initRepository} as const)
export const changeStatusAC = (value: StatusType) => ({type: ACTIONS_TYPE.CHANGE_STATUS, value} as const)
export const setErrorAC = (error: string | null) => ({ type: ACTIONS_TYPE.SET_ERROR, error } as const)
export const setPageNumberAC = (value: number) => ({type: ACTIONS_TYPE.SET_PAGE_NUMBER, value} as const)

export const getUsersProfileThunk = (user: string) => (dispatch: Dispatch) => {
    dispatch(changeStatusAC('loading'))
    usersApi.getUsersProfile(user)
        .then((res) => {
            dispatch(addUserProfileAC(res))
            dispatch(setPageNumberAC(1))
            dispatch(changeStatusAC('success'))
        })
        .catch((err)=>{
            dispatch(addUserProfileAC(null))
            dispatch(addUserRepositoriesAC(null))
            dispatch(changeStatusAC('failed'))
            handleServerNetworkError(err, dispatch)
        })
}

export const getUsersReposThunk = (username: string, per_page: number, page: number) => (dispatch: Dispatch) => {
    dispatch(changeStatusAC('loading'))
    dispatch(setInitRepositoryAC(true))
    usersApi.getUsersRepos(username, per_page, page)
        .then((res) => {
            dispatch(addUserRepositoriesAC(res))
            dispatch(setInitRepositoryAC(false))
            dispatch(changeStatusAC('success'))
        })
        .catch((err) => {
            dispatch(addUserProfileAC(null))
            dispatch(setInitRepositoryAC(false))
            handleServerNetworkError(err, dispatch)
            dispatch(changeStatusAC('failed'))
        })
}

type ActionsType =
    | ReturnType<typeof addUserProfileAC>
    | ReturnType<typeof addUserRepositoriesAC>
    | ReturnType<typeof addSearchedUserAC>
    | ReturnType<typeof setInitRepositoryAC>
    | ReturnType<typeof changeStatusAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setPageNumberAC>
