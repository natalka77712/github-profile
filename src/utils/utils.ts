import {Dispatch} from 'redux'
import {changeStatusAC, setErrorAC} from '../redux/reducer';

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch) => {
    dispatch(setErrorAC(error.message ? error.message : 'Some error occurred'))
    dispatch(changeStatusAC('failed'))
}

export const rounding = (num: number) => {
    if (num > 1000) {
        return (num / 1000).toFixed(1)+ 'k'
    }
    return num
}
