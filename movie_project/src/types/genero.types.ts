
export interface IGetGeneros{
    id: number
    type:string
    state: boolean
}

export interface BasicResponse{
    ok: boolean
    smg: string
}

export interface GeneroState{
    generos: IGetGeneros[]
    OnGetGeneros: () => Promise<void>
    OnCreateGenero: (type: string) =>Promise<void>
    OnUpdateGenero: ( type:IGetGeneros) =>Promise<void>
    OnDeleteGenero: (id:number)=> Promise<void>
}

