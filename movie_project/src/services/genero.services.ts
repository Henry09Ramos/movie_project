import axios from "axios"
import {API_URL} from "../utils/constants"
import {  ICreateGenero, IGetGenerosResponse } from "../types/genero.types"


export const get_genero = async(type:string)=>{
    return axios.get<IGetGenerosResponse>(API_URL + "/generos" + type)
}

export const create_genero = async(type:ICreateGenero)=>{
    return axios.post<{ok:boolean, msg:string}>(API_URL + "/genero", type)
}