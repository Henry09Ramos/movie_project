export interface IGetClient{
    id: number
    name: string
    lastName: string
    phone: string
    age: string
    points:number
    state: boolean
}

export interface ICreateClient{
    name: string
    lastName: string
    phone: string
    age: string
}
export interface IUpdateClient{
    id:number
    name: string
    lastName: string
    phone: string
    age: string
}

export interface ClientState {
  clients: IGetClient[]
  OnGetClient: () => Promise<void>
  OnCreateClient: (cliente: ICreateClient) => Promise<void>
  OnUpdateClient: (id: number, cliente: IUpdateClient) => Promise<void>
  OnDeleteClient: (id: number) => Promise<void>
}




