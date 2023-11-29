
import {useState, useEffect} from 'react'
import { create_genero, get_genero,update_genero,delete_genero} from '../services/genero.services'
import { IGetGenero } from '../types/genero.types'



const useGeneroStore = () =>{
const [data,setGeneros ] = useState<IGetGenero[]>([])

useEffect(()=>{
    OnGetGenero()
}, [])


// const OnGetGenero = async() =>{
//     try {
//         const data = await get_genero()
//         return data
//     } catch  {
//         return({

//         })
//     }
// }

const OnGetGenero = async()=>{
    try {
        const data = await get_genero()
        setGeneros (data.generos)
        
    } catch (error) {
        return{

        }
    }
}


const onCreateGenero = async (type:string) =>{
    try {
        const data = await create_genero(type)
        if(data.ok){
            await OnGetGenero()
        }
        
    } catch {
        return({

        })
    }
}

const onUpdateGenero = async (id:number, type:string) =>{
    try {
        const data = await update_genero(id, type)

        if(data.ok){
            await OnGetGenero()
        }
        
    } catch (error) {
        return({

        })
    }
}

const onDeleteGenero = async (id:number)=>{
    try {
        const data = await delete_genero(id)
        if(data.ok){
            await OnGetGenero()
        }
    } catch (error) {
        return({

        })
    }
} 

return {
    data,
    OnGetGenero,
    onCreateGenero,
    onUpdateGenero,
    onDeleteGenero
}
}

export default useGeneroStore

