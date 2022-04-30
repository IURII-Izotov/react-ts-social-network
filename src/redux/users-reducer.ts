let FOLLOW='FOLLOW'
let UNFOLLOW='UNFOLLOW'
let SET_USERS='SET_USERS'
let SET_TOTAL_COUNT ='SET_TOTAL_COUNT'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let SET_USER_PROFILE="SET_USER_PROFILE"
let SET_USER_ID = "SET_USER_PROFILE"
let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 4,
    currentPage:1,
    isFetching: true,
    profile:null,
    id: null
};

export const usersReducer=(state:any=initialState,action:any)=>{
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map((user:any)=> {
                        if (user.id == action.userID) {
                            return {...user, followed: false}
                        }
                    return user
                })
            }
        case UNFOLLOW:
            return  {
                ...state,
                users:state.users.map((user:any)=> {
                    if(user.id == action.userID){
                        return {...user,followed:true}
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
        default:
                return state
    }
}
export let follow = (userID:any)=>{return {type:FOLLOW,userID} }
export let unfollow= (userID:any)=>{return {type:UNFOLLOW, userID}}
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