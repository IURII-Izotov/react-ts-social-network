import React from 'react';
import avatar from '../../../../img/User-Avatar-Profile-Clip-Art-Transparent-PNG.png'
import style from './Post.module.css'

export function Post(props:any) {
    return (
        <div className={style.postWrap}>
            <div className={style.post}>
                <img className={style.avatar} src={avatar} alt="avatar"/>
                <p className={style.text}>{props.message}</p>
            </div>
            <div className='like'>Like {props.like}</div>
        </div>
    )
}