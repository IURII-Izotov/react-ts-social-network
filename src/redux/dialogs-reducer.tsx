let UPDATE_NEW_MESSAGE_BODY='UPDATE_NEW_MESSAGE_BODY'
let SEND_MESSAGE='SEND_MESSAGE'

export const dialogsReducer=(state:any,action:any,)=>{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            if (action.textBody) {
                state.newMessageBody = action.textBody;
            }
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id:state.messagesData.length+1,
                message: body});
            return state
        default:
            return state
    }
}
export let sendMessageCreator = ()=>{return {type:SEND_MESSAGE} }
export let updateNewMessageBodyCreator = (textBody:string)=>{
    return {
        type:UPDATE_NEW_MESSAGE_BODY,
        textBody:textBody
    }
}