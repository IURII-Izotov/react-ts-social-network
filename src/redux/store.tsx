import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

type actionType = {
    type: string,
    message?: string,
    userID?: number,
    valueTextArea?: string
    textBody?:string
}

export let store = {
    _state: {
        profile: {
            postsData: [
                {id: 2, message: 'My 1 mes', likesCount: 3},
                {id: 3, message: 'OLOLO321OLOLOLO', likesCount: 13212},
                {id: 4, message: 'OLO321LOL321O', likesCount: 1232},
                {id: 5, message: 'OL213', likesCount: 11232},
                {id: 1, message: 'Hi,how are u', likesCount: 2},
            ],
            newPostText: ''
        },
        dialogs: {
            dialogsData: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Olesya'},
                {id: 3, name: 'Viktor'},
                {id: 4, name: 'JoJo'},
            ],
            messagesData: [
                {id: 1, message: 'Hello'},
                {id: 1, message: 'Hi'},
                {id: 1, message: 'GG'},
                {id: 1, message: 'Fly'},
            ],
            newMessageBody:''
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber (store: any) {
        //
    },
    subscribe(observer: (store: any) => void) {
        this._callSubscriber = observer;
    },
    dispatch(action: actionType) {
        this._state.profile=profileReducer(this._state.profile,action);
        this._state.dialogs=dialogsReducer(this._state.dialogs,action);

        this._callSubscriber(this);
        }

}

