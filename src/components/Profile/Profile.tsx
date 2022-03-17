import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export function Profile(props:any) {
    return (
        <>
           <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     addPost={props.addPost}
                     updatePostText={props.updatePostText}
                     newPostText={props.newPostText}/>
        </>
    )
}