import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
export function MyPosts() {
    return (
            <div className={style.myPosts}>
                <div className={style.newPost}>
                    <textarea>post</textarea>
                    <button>Add post</button>
                </div>
                <div className={style.posts}>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>

    )
}