export interface IGetRoles{
    id:number,
    type: string,
    state: boolean
}

export interface IGetRolesResponse extends IBasicResponse{
    rol: IGetRoles[]
}

export interface IBasicResponse{
    ok: true
    state: number
}