export interface  IGetMovie{
    id:number
    title: string
    duration:string
    director: string
    language: string
    image: string
    ranking: string
    generoId:number
    state:boolean

    genero:{
        id: number
        type: string
        state: boolean
    }
}

export interface ICreateMovie{
    title: string
    duration: string
    director: string
    language: string
    image: string
    ranking: string
    generoId: number


}


export interface IUpdateMovie{
    id: number
    title: string
    duration: string
    director: string
    language: string
    image: string
    ranking: string
    generoId: number

}

export interface BasicResponse {
    ok:boolean
    msg: string

}

export interface MovieState{
    movies: IGetMovie[]
    OnGetMovie: () => Promise<void>
    OnCreateMovie: (movie:ICreateMovie) => Promise<void>
    OnUpdateMovie: (id:number, movie: IUpdateMovie) => Promise<void>
    OnDeleteMovie: (id:number) => Promise<void>
}






