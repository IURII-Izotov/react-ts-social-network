let SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    data: {
        id: null,
        email: null,
        login: null,
        isAuth: false
    }
};

export const authReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}
export let setAuntUserData = (id:any,email:any,login: any) => {
    return {type: SET_USER_DATA, data:{id,email,login}}
}
