import {useEffect, useState} from 'react'
import useClientStore from '../../store/client.store'
import { IoMdTrash } from 'react-icons/io';
// import { IoCreateOutline } from 'react-icons/io5';
import LayoutNav from '../Layout';
import UpdateClient from './UpdateClient';
import CreateClient from './createClient';

export default function ClientTable (){


const {clients, OnGetClient , OnDeleteClient} = useClientStore()
const [clientToDelete, setClientToDelete]= useState<{
id:number
name: string
lastName:string
phone:string
age:string

} | null>(null)

// const [clientDelete, setClientDelete] = useState <{id:number, name:string, lastName:string, phone:string, age:string } | null>(null)


useEffect(() => {
    OnGetClient()
  },[])

const handleDelete = (id: number, name:string, lastName:string, phone:string, age:string)=>{
    setClientToDelete({id, name, lastName,phone,age})
}


const confirmDelete = () =>{
    if(clientToDelete){
        OnDeleteClient(clientToDelete.id)
        alert(`El registro se ha eliminado`)
        setClientToDelete(null)
    }
}

const cancelDelete = () =>{
    setClientToDelete(null)
}

    return (
      <>
        <LayoutNav>
          <>
            <div className="">
                
              <div className="">
                <h3 className="text-2xl  font-semibold ">Cliente</h3>

              </div>

              <div className="flex justify-start">

                <table className="text-left  justify-center w-20 ">

                  <input
                    className=" top-30  border border-gray-800 bg-gray-100  rounded-full p-2  h-10 w-80 ml-80 mt-10"
                    placeholder="Search"
                  />

                    <div className=''>
                    <CreateClient/>

                    </div>

                  {/* <FiSearch className='ml-80  right-30 inset-x-70'  /> */}

                  <br />
                  <br />

                  <thead className="bg-gray-900 flex text-white w-full rounded-lg mt-[10px] ml-80">
                    <tr className="flex w-full text-sm">
                      <th className="p-4 w-1/4">Name</th>
                      <th className="p-4 w-1/4">lastName</th>
                      <th className="p-4 w-1/4">Phone</th>
                      <th className="p-4 w-1/4">Age</th>
                      <th className="p-4 w-1/4">Points</th>
                      <th className="p-4 w-1/4 ">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full max-height: 200px; ml-80">
                    {clients &&
                      clients.map((items) => (
                        <tr
                          key={items.id}
                          className="flex w-full text-sm border-b border-gray-100"
                        >
                          <th className="p-4 w-1/4">{items.name}</th>
                          <th className="p-4 w-1/4">{items.lastName}</th>
                          <th className="p-4 w-1/4">{items.phone}</th>
                          <th className="p-4 w-1/4">{items.age}</th>
                          <th className="p-4 w-1/4">{items.points}</th>
                          <td className="p-4 w-1/4">
                            <div className="flex justify-between">
                              {/* <button className="bg-green-500 text-white w-10 h-10 rounded-full"> */}
                              <UpdateClient
                                id={items.id}
                                newName={items.name}
                                newLastName={items.lastName}
                                newPhone={items.phone}
                                newAge={items.age}
                              />
                              {/* </button> */}
                              <button
                                onClick={() =>
                                  handleDelete(
                                    items.id,
                                    items.name,
                                    items.lastName,
                                    items.phone,
                                    items.age
                                  )
                                }
                                className="text-red-500 bg-white"
                              >
                                <IoMdTrash className="ml-1" size={30} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {clientToDelete && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-4 rounded-lg shadow-lg ">
                    <p>
                      ¿Estas seguro que deseas eliminar este registro "
                      {clientToDelete.name}"?
                    </p>
                    <div className="mt-4 flex justify-center">
                      <button
                        onClick={confirmDelete}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full "
                      >
                        OK
                      </button>
                      <button
                        onClick={cancelDelete}
                        className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        </LayoutNav>
      </>
    );

}