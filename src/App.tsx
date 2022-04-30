import React from 'react';
import style from './index.module.css'

import {Nav} from "./components/Nav/Nav";

import { Route, Routes} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UserContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props:any) {

    return (
        <div className={style['app-wrapper']}>
            <HeaderContainer/>
            <Nav/>
            <div className={style['app-wrapper-content']}>
            <Routes>
                <Route path="/profile" element={<ProfileContainer />}/>
                <Route path="/profile/:userID" element={<ProfileContainer />}/>
                <Route path="/dialogs/*" element={<DialogsContainer />}/>
                <Route path="/users/*" element={<UserContainer/>}/>
            </Routes>
            </div>
        </div>

    );
}

export default App;
