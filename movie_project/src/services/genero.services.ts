import { BasicResponse, IGetGeneros} from './../types/genero.types';
import axios from "axios"
import {API_URL} from "../utils/constants"
// import {  ICreateGenero, IGetGenerosResponse } from "../types/genero.types"



export const get_generos = async()=>{
   const {data} = await axios.get<{generos: IGetGeneros[]}>(
    API_URL + "/genero"
   )
    return data
 
 }

export const create_genero = async (type : string)=>{
    const{data} = await axios.post<BasicResponse>(API_URL + "/genero", {type})
return data
}

export const update_genero = async (type:IGetGeneros)=>{
    const {data} = await axios.put<{ok:boolean, msg: string}>(API_URL + "/genero/" + type.id, type)
    return data
}

export const delete_genero = async(id:number)=>{
const {data}= await axios.delete<{ok:boolean, msg:string }>(API_URL + "/genero/" + id)
return data
}
