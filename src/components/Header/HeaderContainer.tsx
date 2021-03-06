import React from 'react';

import {Header} from "./Header";
import axios from "axios";
import { connect } from 'react-redux';
import {setAuntUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component<any,any,any> {
    componentDidMount(): void {
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
            withCredentials: true
        }).then((response:any )=> {
                if(response.data.resultCode === 0 ){
                    let {id,email,login}= response.data.data
                    this.props.setAuntUserData(id,email,login)
                }

            })
    }

    render() {
    return <Header {...this.props}/>
    }
}
const mapStateToProps:any = (state:any)=>{
        return {
            isAuth: state.auth.isAuth,
            login: state.auth.login
        }
}
export default connect(mapStateToProps,{setAuntUserData})(HeaderContainer)