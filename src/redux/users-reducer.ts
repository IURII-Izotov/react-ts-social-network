import {userAPI} from "../api/api";


let FOLLOW='FOLLOW'
let UNFOLLOW='UNFOLLOW'
let SET_USERS='SET_USERS'
let SET_TOTAL_COUNT ='SET_TOTAL_COUNT'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let SET_USER_PROFILE="SET_USER_PROFILE"
let SET_USER_ID = "SET_USER_PROFILE"
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
let SET_PAGE_NUMBERS = "SET_PAGE_NUMBERS"
let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 4,
    currentPage:1,
    countNumber:20,
    pageNumbers:[],
    isFetching: true,
    profile:null,
    id: null,
    followingInProgress:[],
};

export const usersReducer=(state:any=initialState,action:any)=>{

    switch (action.type) {
        case FOLLOW:

            return  {
                ...state,
                users: state.users.map((user:any)=> {
                        if (user.id == action.userID) {
                            return {...user, followed: true}
                        }
                    return user
                })
            }
        case UNFOLLOW:
            return  {
                ...state,
                users:state.users.map((user:any)=> {
                    if(user.id == action.userID){
                        return {...user,followed:false}
                    }
                    return user
                }),
            }
        case SET_USERS:

            const newState = {
                ...state,
                users:[...state.users, ...action.users],

            }

            return {
                ...state,
                users:[...action.users]
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount:action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage:action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching:action.isFetching
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_USER_ID:
            return {
                ...state,
                id: action.id,
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:

            return {
                ...state,
                followingInProgress:
                    action.isFetching ?
                    [...state.followingInProgress, action.userID]
                    :
                    state.followingInProgress.filter((id:any)=> id !== action.userID)

            }
            case SET_PAGE_NUMBERS:
                return {
                    ...state,
                    pageNumbers: (function () {
                        let newArr=[]
                        for(let i=state.currentPage;i<=state.currentPage+state.countNumber; i++){
                            newArr.push(i);
                        }
                        return newArr
                    })()
                }

        default:
                return state
    }
}
export let followSuccess = (userID:any)=>{
    return {type:FOLLOW,userID} }
export let unfollowSuccess= (userID:any)=>{return {type:UNFOLLOW, userID}}
export let toggleIsFetching = (isFetching:any)=>{return {type:TOGGLE_IS_FETCHING, isFetching}}

export let setUsers = (users:any)=>{
    return {type:SET_USERS, users:users}
}
export let setTotalCount = (totalCount:any)=>{

    return {type:SET_TOTAL_COUNT,totalCount:totalCount}
}
export let setCurrentPage = (number:number)=>{

    return {type:SET_CURRENT_PAGE,currentPage:number}
}
export let setUserProfile=(profile:any,id:any)=>{
return {type:SET_USER_PROFILE,profile,id}
}
export let setUserId=(id:any)=>{
    return {type:SET_USER_ID,id}
}
export let toggleFollowingProgress=(isFetching:any,userID:any)=>{
    return {type:TOGGLE_IS_FOLLOWING_PROGRESS,isFetching,userID}
}
export let getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(false));
        userAPI.getUsers(currentPage, pageSize).then((data: any) => {
            dispatch(setCurrentPage(currentPage));
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        })
    }

}
export let setPageNumbers=()=>{
    return {type:SET_PAGE_NUMBERS}
}
export let unfollow = (id:number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true,id))
        userAPI.unfollow(id)
            .then((response:any )=> {
                if(response.data.resultCode == 0){
                    dispatch(unfollowSuccess(id))
                }
                dispatch(toggleFollowingProgress(false,id))
            })
        }
    }
export let follow = (id:number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true,id))
        userAPI.follow(id)
            .then((response:any )=> {
                if(response.data.resultCode == 0){
                    dispatch(followSuccess(id))
                }
                dispatch(toggleFollowingProgress(false,id))
            })
    }
}

