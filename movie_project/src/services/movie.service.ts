import { IGetMovie , IUpdateMovie, ICreateMovie} from './../types/movie.types';
import axios from 'axios'
import { API_URL } from '../utils/constants'

export const get_movie = async () =>{
    const { data } = await axios.get<{movies: IGetMovie[]}>(
        API_URL + "/movie"
    )
    return data

}

export const create_movie = async (movies:ICreateMovie) =>{
    const response = await axios.post(`${API_URL}/movie`, movies
    )
    return response.data
}

export const update_movie = async(id:number, movies: IUpdateMovie)=>{
    const { data } = await axios.put<{ok:boolean, msg: string}>(
        API_URL + "/movie/" + id, movies
    )
    return data 
}


export const delete_movie = async ( id: number) =>{
    const {data } = await axios.delete<{ok:boolean, msg: string}>(
        API_URL  + "/movie/" + id
    )
    return data
}
