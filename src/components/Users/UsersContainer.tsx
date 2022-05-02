import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage, setPageNumbers,
    toggleFollowingProgress, unfollow,

} from '../../redux/users-reducer';

import {Users} from "./Users";

import {Preloader} from "../common/Preloader/preloader";


class UsersContainerAPI extends React.Component<any>{

    componentDidMount(): any{
        this.props.setPageNumbers();
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
        this.props.setCurrentPage(this.props.currentPage);
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber,this.props.pageSize);

    }

    render(): React.ReactNode {
        return(

            <>
                {this.props.isFetching? <Preloader/>:null}
            <Users
                pagesNumbers={this.props.pagesNumbers}
                users={this.props.users}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress = {this.props.followingInProgress}
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
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress,
        pagesNumbers: state.usersPage.pageNumbers
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

export let UserContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
        setPageNumbers
    })(UsersContainerAPI);