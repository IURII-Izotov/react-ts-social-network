import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setTotalCount,
    setUsers,
    toggleIsFetching, unfollow,

} from '../../redux/users-reducer';

import axios from "axios";
import {Users} from "./Users";

import {Preloader} from "../common/Preloader/preloader";
class UsersContainerAPI extends React.Component<any>{
    componentDidMount(): any{
        this.props.toggleIsFetching(true);
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials:true})
            .then((response:any )=> {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{withCredentials:true})
            .then((response:any )=> {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    render(): React.ReactNode {
        let pagesNumbers = [];
        for(let i=3000;i<=3020; i++){
            pagesNumbers.push(i);
        }
        return(

            <>
                {this.props.isFetching? <Preloader/>:null}
            <Users
                pagesNumbers={pagesNumbers}
                users={this.props.users}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}

            />
            </>
        )
    }


}

let mapStateToProps = (state:any)=> {
    return {
        users:state.usersPage.users,
        totalCount:state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}
// let mapDispatchToProps = (dispatch:any) => {
//
//     return {
//         follow: (userID:any)=>{
//             dispatch(followActionCreator(userID))
//         },
//         unfollow: (userID:any)=>{
//             dispatch(unfollowActionCreator(userID))
//         },
//         setUsers:(users:any)=>{
//             dispatch(setUsersActionCreator(users));
//         },
//         setTotalCount:(totalCount:any)=>{
//             dispatch(setTotalCountCreator(totalCount));
//         },
//         setCurrentPage:(number:number)=>{
//             dispatch(setCurrentPageCreator(number));
//         },
//         toggleIsFetching:(isFetching:any)=>{
//             dispatch(setIsFetchingActionCreator(isFetching))
//         }
//     }
//
// }
export let UserContainer=connect(mapStateToProps,
    {
    follow,
    unfollow,
    setUsers,
    setTotalCount,
    setCurrentPage,
    toggleIsFetching
    })(UsersContainerAPI);