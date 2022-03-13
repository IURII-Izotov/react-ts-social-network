import React from 'react';
import background from "../../img/background-profile.jpg";
import style from './Profile.module.css'
import profileImg from '../../img/User-Avatar-Profile-Clip-Art-Transparent-PNG.png'
import {Post} from "./MyPosts/Post/Post";
import {MyPosts} from "./MyPosts/MyPosts";
export function Profile() {
    return (
        <div className={style.content}>
            <div className={style.background}>
                <img className={style.imgBackground} src={background} alt="background"/>
            </div>

            <div className={style.accountInfo}>
                <div className={style.avatar}>
                    <img src={profileImg} className={style.accountImg}/>
                </div>
                <div className={style.accountDetails}>
                    <span className={style.name}>Nick</span>
                    <span className={style.age}>24</span>
                    <span className={style.city}>New-York</span>
                </div>
            </div>
            <MyPosts/>
        </div>
    )
}