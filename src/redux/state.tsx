import {rerenderEntireTree} from "../render";


export let store = {
    state: {
        profile:{
            postsData:[
                {id:1,message:'Hi,how are u',likesCount: 2},
                {id:2,message:'My 1 mes',likesCount: 3},
                {id:3,message:'OLOLO321OLOLOLO',likesCount: 13212},
                {id:4,message:'OLO321LOL321O',likesCount: 1232},
                {id:5,message:'OL213',likesCount: 11232},
            ],
            newPostText:'123'
        },
        dialogs:{
            dialogsData:[
                {id:1, name:'Dima'},
                {id:2, name:'Olesya'},
                {id:3, name:'Viktor'},
                {id:4, name:'JoJo'},
            ],
            messagesData: [
                {id:1,message:'Hello'},
                {id:1,message:'Hi'},
                {id:1,message:'GG'},
                {id:1,message:'Fly'},
            ],
        },
    },

    dispatch: {
        addPost:()=>{
            let objMessage =
                {   id:store.state.profile.postsData.length + 1,
                    message:store.state.profile.newPostText ,
                    likesCount: 0
                };
            store.state.profile.postsData.push(objMessage);
            store.state.profile.newPostText ='';
            rerenderEntireTree(store);
        },
        updatePostText: (value:string)=>{
            store.state.profile.newPostText = value;
            rerenderEntireTree(store);
        }
    }
}