import axios from "axios"
import {API_URL} from "../utils/constants"
import {  IGetGenerosResponse } from "../types/genero.types"


export const get_genero = async(type:string)=>{
    return axios.get<IGetGenerosResponse>(API_URL + "/generos"+ type)
}