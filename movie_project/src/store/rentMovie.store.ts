import { RentMovieState } from './../types/rentMovie.types';
import{get_rentmovie, create_rentmovie, update_rentmovie, delete_rentmovie} from '../services/rentMovie.service'
import {create} from 'zustand'
import { ICreateRentMovie, IUpdateRentMovie} from '../types/rentMovie.types'

const useRentMovieStore = create<RentMovieState>((set, get) =>({
    rentmovie:[],
OnGetRentMovie: async() =>{
    try{
        const data = await get_rentmovie()
        set({
            rentmovie: data.rentmovie
        })
        
    }catch (error){
        console.log('error')
                }
}, 
OnCreateRentMovie: async(rentmovie: ICreateRentMovie)=>{
try {
    const data = await create_rentmovie(rentmovie)
    if(data.ok){
        get().OnGetRentMovie()
    }
    
} catch (error) {
    console.log('error')
}
},

async OnUpdateRentMovie (id: number, rentmovie: IUpdateRentMovie){
    try {
        const data = await update_rentmovie (id, rentmovie)
if(data.ok){
    get().OnGetRentMovie()
}
    } catch (error) {
        console.log('error')
    }
},

OnDeleteRentMovie: async(id:number)=>{
    try {
        const data = await delete_rentmovie(id)
        if(data.ok){
            await get().OnGetRentMovie
        }
    } catch (error) {
        console.log('error')
    }
}

}))

export default useRentMovieStore