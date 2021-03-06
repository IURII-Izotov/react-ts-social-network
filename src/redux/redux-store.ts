import {applyMiddleware,combineReducers,createStore} from 'redux'
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profile:profileReducer,
    dialogs:dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
