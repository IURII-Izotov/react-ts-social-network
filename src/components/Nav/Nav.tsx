import React from 'react';
import style from './Nav.module.css'
import {NavLink} from 'react-router-dom';
export function Nav() {
    return (
        <nav className={style.nav}>
            <ul>
                <li className={style.navList}><NavLink className={ navData => navData.isActive ? `${style.link} ${style.active} ` : `${style.link}`}   to='/profile'>Profile</NavLink></li>
                <li className={style.navList}><NavLink className={ navData => navData.isActive ? `${style.link} ${style.active} ` : `${style.link}`}   to='/dialogs'>Dialogs</NavLink></li>
                <li className={style.navList}><NavLink className={ navData => navData.isActive ? `${style.link} ${style.active} ` : `${style.link}`}   to='/news'>News</NavLink></li>
                <li className={style.navList}><NavLink className={ navData => navData.isActive ? `${style.link} ${style.active} ` : `${style.link}`}   to='/music'>Music</NavLink></li>
                <li className={style.navList}><NavLink className={ navData => navData.isActive ? `${style.link} ${style.active} ` : `${style.link}`}   to='/settings'>Settings</NavLink></li>
            </ul>
        </nav>
    )
}