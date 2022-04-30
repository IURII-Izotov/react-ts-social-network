import React, {JSXElementConstructor} from 'react';
import style from './Nav.module.css'
import {NavLink, useLocation, useNavigate, useParams} from 'react-router-dom';
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/users-reducer";
import {withRouter} from "../Profile/ProfileContainer";
export function Nav(props:any) {
    return (
        <nav className={style.nav}>
            <ul>
                <li className={style.navList}><NavLink className={ navData => navData.isActive ? `${style.link} ${style.active} ` : `${style.link}`}   to='/profile'>Profile</NavLink></li>
                <li className={style.navList}><NavLink className={ navData => navData.isActive ? `${style.link} ${style.active} ` : `${style.link}`}   to='/dialogs'>Dialogs</NavLink></li>
                <li className={style.navList}><NavLink className={ navData => navData.isActive ? `${style.link} ${style.active} ` : `${style.link}`}   to='/news'>News</NavLink></li>
                <li className={style.navList}><NavLink className={ navData => navData.isActive ? `${style.link} ${style.active} ` : `${style.link}`}   to='/music'>Music</NavLink></li>
                <li className={style.navList}><NavLink className={ navData => navData.isActive ? `${style.link} ${style.active} ` : `${style.link}`}   to='/settings'>Settings</NavLink></li>
                <li className={style.navList}><NavLink className={ navData => navData.isActive ? `${style.link} ${style.active} ` : `${style.link}`}   to='/users'>Users</NavLink></li>
            </ul>
        </nav>
    )
}
let mapStateToProps=(state:any)=> {
    return {
        profile:state.usersPage.profile
    }
}

export default connect(mapStateToProps,{setUserProfile})(Nav);