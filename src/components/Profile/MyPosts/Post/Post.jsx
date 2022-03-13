import React from 'react';
import avatar from '../../../../img/User-Avatar-Profile-Clip-Art-Transparent-PNG.png'
import style from './Post.module.css'
export function Post() {
    return (
        <div className={style.post}>
            <img className={style.avatar} src={avatar} alt="avatar"/>
            <p className={style.text}>post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1post1</p>
        </div>
    )
}