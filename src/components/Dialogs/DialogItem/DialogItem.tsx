import React from 'react';
import style from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const DialogItem=(props:any)=>{
    return (
            <>
                <div className={`${style.dialog} ${style.active}`}>
                    <NavLink className={(linkData)=>linkData.isActive ? `${style.linkDialog} ${style.active}`:`${style.linkDialog}`} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
                </div>
            </>
    )
}