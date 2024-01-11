import axios from "axios"
import { API_URL } from './../utils/constants';
import { IGetUsers,ICreateUser } from "../types/user.types"


export const get_user = async()=>{
    const{data}=await axios.get<{users:IGetUsers[]}>(
        API_URL + "/user"
    )
    return data
}
export const create_user = async(user:ICreateUser)=>{
    const{data}= await axios.post<{ok:boolean, msg:string}>(API_URL + "/user", user)
    return data
}

export const update_user = async(id:number,name:string,email:string,password:string)=>{
    const{data}= await axios.put<{ok:boolean, msg:string}>(API_URL + "/user/"+ id,{name,email,password})
    return data
}

export const delete_user = async (id: number) => {
    const{data}= await axios.delete<{ ok: boolean, msg: string }>(API_URL + "/user/"+id );
    return data
}




