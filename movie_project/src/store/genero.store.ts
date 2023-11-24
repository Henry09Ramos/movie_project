import { defineStore } from "pinia"
import { IGetGeneros} from "../types/genero.types"
import {get_genero} from "../services/genero.services"


export const useGeneroStore = defineStore('genero',{
    state:()=>({
        //el siguiente codigo define el tipo de una varibale o propiedad
        genero: [] as IGetGeneros[],
        genero_list:[] as IGetGeneros[]
    }),
    actions:{
        OnGetGeneros(name:string){
            get_genero(name)
            .then(({data})=>{
                if(data.ok){
                   this.genero = data.generos
                }
            })
        }
    }
})
