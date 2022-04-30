import React from 'react';
import logo from "../../img/logo.png";
import style from './Header.module.css'


class Clock extends React.Component<any, any>{
    timerID : any= 0;
    constructor(props:any) {
        super(props);
        this.state = {date: new Date()}
    }
    componentDidMount(): void {
        this.timerID = setInterval(()=>{
            this.tick()
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({date:new Date()})
    }
    render(){
        return <span>{this.state.date.toLocaleTimeString()}</span>
    }
}
export function Header(props:any) {
return (
    <header className={style.header}>
        <img alt={'logo'} className={style['header-img']} src={logo}/>
        <Clock/>
        <div className={style.loginBlock}> {props.isAuth? props.login: 'LogIn'}</div>
    </header>
)
}