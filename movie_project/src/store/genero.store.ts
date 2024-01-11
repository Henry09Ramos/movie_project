import {create} from 'zustand'
import { create_genero, get_generos,update_genero,delete_genero} from '../services/genero.services'
import { IGetGeneros } from '../types/genero.types'
import {GeneroState} from '../types/genero.types'

export const useGeneroStore = create<GeneroState>((set, get) =>({
    generos: [],
    async OnGetGeneros(){
        const data = await get_generos()
        if(data.generos){
            set((state) =>({
                ...state,
                generos: data.generos
            }))
        }else{
            data.generos = []
        }
    },
    async OnCreateGenero(type:string){
        const data = await create_genero(type)
        if(data.ok){
            get().OnGetGeneros()
        }
    },
    async OnUpdateGenero (type:IGetGeneros){
        const data = await update_genero(type)
        if(data.ok){
            get().OnGetGeneros()
        }
    },
    async OnDeleteGenero(id: number){
        const data = await delete_genero(id)
        if(data.ok){
            get().OnGetGeneros()
        }
    }
    
})
)

export default useGeneroStore