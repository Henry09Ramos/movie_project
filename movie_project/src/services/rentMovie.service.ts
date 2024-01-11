import { ICreateRentMovie, IGetRentMovie, IUpdateRentMovie } from './../types/rentMovie.types';
import axios from 'axios'
import {API_URL} from '../utils/constants'


export const get_rentmovie = async() =>{
    const {data} = await axios.get<{rentmovie: IGetRentMovie[]}>(
        API_URL + "/rent"
    )
    return data
}

export const create_rentmovie = async (rentmovie:ICreateRentMovie) =>{
    const response = await axios.post(`${API_URL}/rent`, rentmovie)
    return response.data
}

export const update_rentmovie = async (id: number, rentmovie: IUpdateRentMovie)=>{
    const {data} = await axios.put<{ok:boolean, msg:string}>(
        API_URL + "/rent/" + id, rentmovie
    )
    return data 
}


export const delete_rentmovie = async(id:number)=>{
    const {data} = await axios.delete<{ok:boolean, msg:string}>(
        API_URL + "/rent" + id
    )
    return data 
}




