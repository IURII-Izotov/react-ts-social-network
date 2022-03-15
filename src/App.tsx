import React from 'react';
import style from './index.module.css'
import {Header} from './components/Header/Header';
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { Route, Routes, Link} from 'react-router-dom';


function App(props:any) {

    return (
        <div className={style['app-wrapper']}>
            <Header/>
            <Nav/>
            <div className={style['app-wrapper-content']}>
            <Routes>
                <Route path="/" element={<Profile postsData={props.state.profile.postsData}/>}/>
                <Route path="/profile" element={<Profile postsData={props.state.profile.postsData}/>}/>
                <Route path="/dialogs/*" element={<Dialogs dialogs ={props.state.dialogs.dialogsData} messages={props.state.dialogs.messagesData}/>}/>
            </Routes>
            </div>
        </div>

    );
}

export default App;
