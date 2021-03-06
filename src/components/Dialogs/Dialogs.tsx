import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export const Dialogs=(props:any)=>{
    let messageElements = props.messages.map((message:any)=>{
        return <Message message={message.message}/>
    })
    let dialogElements =props.dialogs.map((item:any)=>{
        return <DialogItem id={item.id} name={item.name}/>
    })

    let newMessageBody = props.newMessageBody;
    let onSendMessageClick=()=>{
        props.sendMessage();

    }
    let onNewMessageChange=(event:any)=>{
        let body = event.target.value;
        props.updateNewMessageChange(body);
    }
    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>

                { dialogElements }

            </div>
            <div className={style.messages}>

                { messageElements }
                <div>
                    <textarea value={newMessageBody}
                              onChange={onNewMessageChange} ></textarea>
                    <button onClick={onSendMessageClick}>send</button>
                </div>
            </div>
        </div>
    )
}