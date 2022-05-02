import React from 'react'
import style from "./Users.module.css";
import standardAvatar from "../../img/Avatar-Profile.png";
import {NavLink} from "react-router-dom";


export let Users = (props:any)=>{
    return(
    <div className={style.users}>

        {props.pagesNumbers.map((numberOfPage: number) => {
                return (
                    <span key={numberOfPage}
                          className={props.currentPage === numberOfPage ? style.selectPage : style.numberOfPage}
                          onClick={()=>{props.onPageChanged(numberOfPage)}}
                    >{`${numberOfPage} `}</span>
                )
            }
        )
        }
        {props.users.map((user: any) => {
            return <div key={user.id} >
                <div>
                    <NavLink to={'/profile/'+user.id}>
                        <img src={user.photos.small != null ? user.photos.small : standardAvatar}
                         className={style.userPhoto}
                         alt='user-Image'/>
                         </NavLink>
                    {user.followed ?

                        <button disabled={props.followingInProgress.some((id:any)=> id === user.id )} onClick={()=>{
                            props.unfollow(user.id);
                        }} className={style.userSubscribe}>UnSubscribe</button>
                        :
                        <button disabled={props.followingInProgress.some((id:any)=> id === user.id )} onClick={()=>{
                            props.follow(user.id);
                        }} className={style.userSubscribe}>Subscribe</button>
                    }
                </div>
                <div>
                    <div className={style.userPersonalInfo}>
                        <div  className={style.userName}>{user.name}</div>
                        <div  className={style.secondName}>{user.secondName}</div>
                    </div>
                    <div >{user.status}</div>
                </div>
                <div className={style.userLocation}>
                    {/*<div >{user.location.city}</div>*/}
                    {/*<div >{user.location.country}</div>*/}
                </div>
            </div>

        })
        }
    </div>
    )
}