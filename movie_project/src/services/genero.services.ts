import { IGetGenero} from './../types/genero.types';
import axios from "axios"
import {API_URL} from "../utils/constants"
// import {  ICreateGenero, IGetGenerosResponse } from "../types/genero.types"


// export const get_genero = async()=>{
//     return axios.get<IGetGenerosResponse>(API_URL + "/generos" )
// }

// export const create_genero = async(type:ICreateGenero)=>{
//     return axios.post<{ok:boolean, msg:string}>(API_URL + "/genero", type)
// }

// export const get_genero = async()=>{
//    await axios.get<{ok : boolean ,message:string}>(API_URL + "/genero")

// }
export const get_genero = async()=>{
   const {data} = await axios.get<{generos: IGetGenero[]}>(
    API_URL + "/genero"
   )
    return data
 
 }

export const create_genero = async (type : string)=>{
    const{data} = await axios.post<{ok:boolean, message:string}>(API_URL + "/genero", {type,})
return data
}

export const update_genero = async (id: number, type:string)=>{
    const {data} = await axios.put<{ok:boolean, message: string}>(API_URL + "/genero" + id, {type,})
    return data
}

export const delete_genero = async(id:number)=>{
const {data}= await axios.delete<{ok:boolean,message:string }>(API_URL + "/genero/" + id,)
return data
}
