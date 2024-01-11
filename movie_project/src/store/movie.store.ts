
import { create_movie, delete_movie, get_movie, update_movie } from '../services/movie.service';
import {ICreateMovie , IUpdateMovie} from './../types/movie.types';
import { MovieState } from './../types/movie.types';
import {create} from 'zustand'


  const useMovieStore = create<MovieState>((set, get) =>({
    movies: [],
    OnGetMovie: async()=>{
        try {
            const data = await get_movie()
            set({
                movies: data.movies
            })
            
        } catch (error) {
            console.log('error')
        }
        
    },
    OnCreateMovie: async(movies:ICreateMovie) =>{
        try {
            const data  = await create_movie(movies)
            if(data.ok){
                get().OnGetMovie()
            }
        } catch (error) {
            console.log('error')
            
        }
    },
    

        async OnUpdateMovie (id:number, movies: IUpdateMovie){
        try {
            const data = await update_movie (id, movies)
            if(data.ok){
                 get().OnGetMovie()
            }
        } catch (error) {
            console.log('error')
        }
        // const data = await update_movie(id, movie)
        // if(data.ok){
        //     get().OnGetMovie()
        // }
    },
    async OnDeleteMovie (id: number) {
       try {
        const data = await delete_movie (id)
        if(data.ok)
        {
            await get().OnGetMovie()
        }
       } catch (error) {
        console.log('error')
       }
    },
}))

export default useMovieStore

