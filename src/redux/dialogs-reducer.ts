let UPDATE_NEW_MESSAGE_BODY='UPDATE_NEW_MESSAGE_BODY'
let SEND_MESSAGE='SEND_MESSAGE'

let initialState =  {
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
};

export const dialogsReducer=(state:any=initialState,action:any,)=>{

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody:action.textBody
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody:'',
                messagesData:[...state.messagesData,{id:state.messagesData.length+1,
                    message: body}]
            }
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