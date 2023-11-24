export interface IGetGeneros{
    id:number
    type:string
    state:boolean
}

export interface ICreateGenero {
    type:string
   
}

export interface IGetGenerosResponse extends IBasicResponse{
    generos:IGetGeneros[]
}

export interface IBasicResponse{
    ok: true 
    state:number
}

