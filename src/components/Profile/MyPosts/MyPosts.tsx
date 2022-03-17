import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";


export function MyPosts(props:any) {
    let postElements = props.postsData.map((post:any)=>{
        return <Post message={post.message} like = {post.likesCount}/>
    })
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let onClickChange = ()=>{
            props.addPost();
    }
    let onChangeText=()=>{
        if(newPostElement.current) {
            let valueTextArea = newPostElement.current.value;
            props.updatePostText(valueTextArea);
        }
    }
    return (
            <div className={style.myPosts}>
                <div className={style.newPost}>
                    <textarea onChange={ onChangeText }
                              ref={newPostElement}
                              className={style.textareaPost}
                              value={props.newPostText}></textarea>
                    <button onClick={ onClickChange } className={style.sendTextPostButton}>Send</button>
                </div>
                <div className={style.posts}>
                    { postElements }
                </div>
            </div>
    )
}