import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state:any)=>{
    return {
        postsData:state.profile.postsData,
        newPostText:state.profile.newPostText
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewPostText:(valueTextArea:string)=>{
            dispatch(updatePostTextActionCreator(valueTextArea));
        },
        addPost:()=> {
            dispatch(addPostActionCreator())
        }
    }

}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)