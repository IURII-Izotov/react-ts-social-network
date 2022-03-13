import React from 'react';
import logo from "../../img/logo.png";
import style from './Header.module.css'

export function Header() {
return (
    <header className={style.header}>
        <img alt={'logo'} className={style['header-img']} src={logo}/>
    </header>
)
}