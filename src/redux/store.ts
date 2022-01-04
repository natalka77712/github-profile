import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {profileReducer} from "./reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
