import {combineReducers,createStore} from 'redux'
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

let reducers = combineReducers({
    profile:profileReducer,
    dialogs:dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
export let store = createStore(reducers);
