import { get_client, create_client, update_client, delete_client } from '../services/client.services';
import {  ICreateClient, IUpdateClient } from '../types/client.types';
import { ClientState } from '../types/client.types';
import { create } from 'zustand';

const useClientStore = create<ClientState>((set, get) => ({
    clients: [],
    OnGetClient: async() =>{
        try {
            const data = await get_client()
            set({
                clients: data.clients
            })
        } catch (error) {
            console.log('error')
            
        }

    },
     OnCreateClient: async(cliente:ICreateClient) =>{
      try {
        const data = await create_client(cliente)
        if(data.ok){
            get().OnGetClient()
        }
      } catch (error) {
        console.log('error')
        
      }
      
    },
    //Modificar
     OnUpdateClient: async (id:number, cliente: IUpdateClient)=> {
      const data = await update_client(id, cliente)
      if(data.ok){
        get().OnGetClient()
      }
    },
    async OnDeleteClient(id: number) {
     try {
        const data = await delete_client(id)
        if(data.ok){
            await get().OnGetClient()
        }
        
     } catch (error) {
        console.log('error')
        
     }
    },
  })
  )
  export default useClientStore