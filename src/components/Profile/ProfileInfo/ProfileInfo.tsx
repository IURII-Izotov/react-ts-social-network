import React from 'react';
import background from "../../../img/background-profile.jpg";
import style from './ProfileInfo.module.css'
import profileImg from '../../../img/User-Avatar-Profile-Clip-Art-Transparent-PNG.png'
import {Preloader} from "../../common/Preloader/preloader";




export function ProfileInfo(props:any) {

    if(!props.profile){
        return <Preloader/>
    }

    return (
        <>
            <div className={style.background}>
                <img className={style.imgBackground} src={background} alt="background"/>
            </div>

            <div className={style.accountInfo}>
                <div className={style.avatar}>
                    <img src={props.profile.photos.large ?? profileImg} className={style.accountImg}/>
                </div>
                <div className={style.accountDetails}>
                    <span className={style.name}>Name: {props.profile.fullName}</span>
                    <span className={style.age}>About: {props.profile.aboutMe}</span>
                    <span className={style.city}>Looking For A Job:{props.profile.lookingForAJob ?" Yes":" No"}</span>
                </div>
            </div>
        </>
    )
}