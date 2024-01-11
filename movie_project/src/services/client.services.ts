import { ICreateClient, IGetClient,  IUpdateClient } from './../types/client.types';
import axios from 'axios'
import { API_URL } from '../utils/constants';

export const get_client = async () => {
    const {data} = await axios.get<{clients: IGetClient []}>(
        API_URL + "/cliente"
        
    )

    return data
}


export const create_client = async(cliente:ICreateClient) =>{
    const response = await axios.post(`${API_URL}/cliente`, cliente
    
    ) 
    return response.data
}


export const update_client = async(id:number, cliente:IUpdateClient)=>{
    const {data} = await axios.put<{ok:boolean, msg:string}>(
        API_URL + "/cliente/" + id, cliente
        )
        
    return data
}

export const delete_client = async (id: number)=>{
    const {data} = await axios.delete<{ok:boolean, msg:string}>(
        API_URL + "/cliente/" + id)
    return data
}