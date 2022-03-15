import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
export function MyPosts(props:any) {
    debugger
    let postElements = props.postsData.map((post:any)=>{
        return <Post message={post.message} like = {post.likesCount}/>
    })
    return (
            <div className={style.myPosts}>
                <div className={style.newPost}>
                    <textarea className={style.textareaPost}>post</textarea>
                    <button className={style.sendTextPostButton}>Send</button>
                </div>
                <div className={style.posts}>
                    { postElements }
                </div>
            </div>
    )
}