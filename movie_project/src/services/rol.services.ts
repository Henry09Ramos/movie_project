import axios from "axios"
import{API_URL} from "../utils/constants"
import { IGetRolesResponse } from "../types/rol.types"

export const get_roles= async()=>{
    return axios.get<IGetRolesResponse>(API_URL + "/rol")
}