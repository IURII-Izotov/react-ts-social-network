let ADD_POST = 'ADD-POST'
let UPDATE_POST_TEXT='UPDATE-POST-TEXT'

export const profileReducer=(state:any,action:any)=>{
    switch (action.type) {
        case ADD_POST:
            let objMessage =
                {
                    id: state.postsData.length + 1,
                    message: state.newPostText,
                    likesCount: 0
                };
            state.postsData.push(objMessage);
            state.newPostText = '';
            return state
        case UPDATE_POST_TEXT:
            if (action.valueTextArea) {
                state.newPostText = action.valueTextArea;
            }
            return state
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