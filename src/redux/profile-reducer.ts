let ADD_POST = 'ADD-POST'
let UPDATE_POST_TEXT='UPDATE-POST-TEXT'

let initialState = {
    postsData: [
        {id: 2, message: 'My 1 mes', likesCount: 3},
        {id: 3, message: 'OLOLO321OLOLOLO', likesCount: 13212},
        {id: 4, message: 'OLO321LOL321O', likesCount: 1232},
        {id: 5, message: 'OL213', likesCount: 11232},
        {id: 1, message: 'Hi,how are u', likesCount: 2},
    ],
    newPostText: '243234'
}

export const profileReducer=(state:any=initialState,action:any)=>{
    switch (action.type) {
        case ADD_POST: {
            let objMessage =
                {
                    id: state.postsData.length + 1,
                    message: state.newPostText,
                    likesCount: 0
                };
            return  {
                ...state,
                postsData : [...state.postsData,objMessage],
                newPostText:''
            }
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText : action.valueTextArea
            }
        }
        default:
            return state

    }

}
export let addPostActionCreator = ()=>{
    return {
        type:ADD_POST
    }
}
export let updatePostTextActionCreator = (valueTextArea:string)=>{
    return {
        type:UPDATE_POST_TEXT,
        valueTextArea:valueTextArea
    }
}