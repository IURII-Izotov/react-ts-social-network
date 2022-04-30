import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export let Profile=(props:any)=>{

        return (
            <>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer />
            </>
        )
    }

