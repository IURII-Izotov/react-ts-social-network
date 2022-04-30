import React from 'react';

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import { Dialogs } from './Dialogs';

import {connect} from "react-redux";

let mapStateToProps = (state:any)=>{
    return {
        newMessageBody: state.dialogs.newMessageBody,
        dialogs:state.dialogs.dialogsData,
        messages:state.dialogs.messagesData
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        sendMessage:()=>{
            dispatch(sendMessageCreator())
        },
        updateNewMessageChange:(body:string)=>{
            dispatch(updateNewMessageBodyCreator(body))
        }
    }

}
export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);