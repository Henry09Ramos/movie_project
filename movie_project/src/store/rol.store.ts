import {defineStore} from "pinia"
import { IGetRoles } from "../types/rol.types"
import{get_roles} from "../services/rol.services"

export const useRoleStore = defineStore('rol',{
    state:()=>({
        rol:[] as IGetRoles[],
        rol_list:[] as IGetRoles[]
    }),
    actions:{
        OnGetRoles(){
            get_roles()
            .then(({data})=>{
                if(data.ok){
                    this.rol = data.rol
                }
            })
        }
    }
})