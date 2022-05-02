import React, {JSXElementConstructor} from 'react';

import {connect} from "react-redux";
import {Profile} from "./Profile";
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import {getUserProfile} from "../../redux/profile-reducer";



class ProfileContainer extends React.Component<any,any,any>{
    userID:number = this.props.router.params.userID;
    constructor(props:any) {
        super(props);
        this.state = {user: props.getUserProfile(this.userID)}
    }
    componentDidMount(): void {

        if (!this.userID) {
            this.props.getUserProfile(2);
        }else{
            this.props.getUserProfile(this.userID);
        }
    }
    updateUser(){
        this.setState({user: this.props.getUserProfile(this.userID)})
    }
    render(): React.ReactNode{
        return (
            <>
                <Profile {...this.props} profile={this.props.profile}/>
            </>
        )

    }

}
    let mapStateToProps=(state:any)=> {
        return {
            profile:state.usersPage.profile,
            id:state.auth.id
        }
    }
export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps,{getUserProfile})(withRouter(ProfileContainer))