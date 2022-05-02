import axios, {AxiosResponse} from "axios";

const instance=axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "d422aaf2-11e8-4b75-bb80-24005649620b"
    }
})

export const userAPI = {
    getUsers(currentPage: number = 1, pageSize: any = 4) {
        return instance.get<any>(`users?page=${currentPage}&count=${pageSize}`,)
            .then((response: any) => {
                return response.data
            })
    },
    unfollow(id:number){
       return  instance.delete<any, AxiosResponse<any, any>, any>(`follow/${id}`)
    },
    follow(id:number){
       return  instance.post<any, AxiosResponse<any, any>, any>(`follow/${id}`)
    },
    getUserAunt(){
       return instance.get<any>(`auth/me`)

    },
    getUserProfile(userID:number){
        return instance.get<any>(`profile/${userID}`)
    }
}
