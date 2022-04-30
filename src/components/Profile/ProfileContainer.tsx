import React, {JSXElementConstructor} from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import axios from "axios";
import {connect} from "react-redux";
import {setUserId, setUserProfile} from "../../redux/users-reducer";
import {Profile} from "./Profile";
import {useLocation, useNavigate, useParams} from 'react-router-dom'



class ProfileContainer extends React.Component<any,any,any>{
    componentDidMount(): void {
        console.log(this.props)

        let userID = this.props.router.params.userID;
        if (!userID) {
            userID=1;
        }
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
            withCredentials: true
        }).then((response:any )=> {
            if(response.data.resultCode === 0 ){
                let id= response.data.data.id
                this.props.setUserId(id);
            }
            return axios.get<any>(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
        }).then((response: any) => {
            this.props.setUserProfile(response.data);
        })


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

export default connect(mapStateToProps,{setUserProfile,setUserId})(withRouter(ProfileContainer))