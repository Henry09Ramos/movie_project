import React,{useState} from 'react'
import useClientStore from '../../store/client.store'
import { CgAddR } from "react-icons/cg";
import { ICreateClient } from '../../types/client.types';



export default function CreateClient (){

const {OnCreateClient} = useClientStore()
// const [lastName, setLastName] = useState('')
// const [name, setName] = useState('')
// const [phone, setPhone] = useState('')
// const [age, setAge] = useState('')


const [cliente, setClients] = useState<ICreateClient>({
    name: '',
    lastName: '',
    phone: '',
    age: ''
})


const [showModal, setShowModal] = useState(false)


const openModal = () =>{
    setShowModal(true)
}

const closeModal = () =>{
    setShowModal(false)
}


const handleInputChange = (
    e:React.ChangeEvent<HTMLInputElement | HTMLInputElement>)=>{
        const {name ,value } = e.target 
    setClients({
        ...cliente,
        [name]: value
        
    })
}

// const handleInputChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setAge(e.target.value);
//   }

// const handleInputChangeP = (e:React.ChangeEvent<HTMLInputElement >) =>{
//     setPhone(e.target.value)
// }



// const handleInputChangeL = (
//     e:React.ChangeEvent<HTMLInputElement >
// )=>{
//     setLastName(e.target.value)
// }

// const handleInputChangeN =(
//     e:React.ChangeEvent<HTMLInputElement >
// )=>{
//     setName(e.target.value)
// }

const handleSubmit = async () =>{
    if( !cliente.name || !cliente.lastName || !cliente.phone || !cliente.age){
        alert('error')
        return 
    }

try{
    await OnCreateClient(cliente)
    closeModal()
}catch(error){
    console.error("Error creating user: ", error)
}
}



return(
    <div >
<div className=' opacity-100 '>
    <button onClick={openModal} className=' rounded-lg  '>
        <CgAddR size={40} color='green' />

    </button>
    {showModal &&(
        <div className=' fixed inset-0 flex items-center z-50 bg-black bg-opacity-50 justify-center p-10 '>
<form className='w-full max-w-lg bg-white rounded-lg shadow-lg p-6 '>
<h3 className='text-2xl font-semibold mb-4 flex justify-center'>
Client
</h3>
    <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full  md:w-1/2 px-3 mb-6 md:mb-0'>
        <label htmlFor='cliente'
         className='block text-gray-700 
         uppercase tracking-wide
         text-xs font-bold mb-2'
         >
        Name: 
            </label>
<input 
 type='text'
 name='name' 
 value={cliente.name}
  onChange={handleInputChange} 
  className='appearance-none
  block w-full
  bg-gray-200
  text-gray-700 border
  border-blue-500
  rounded py-3 px-4
  mb-3 leading-tight
  focus:outline-none
  focus:bg-white'
   placeholder='Ingrese su nombre' />
   </div>

<br/>
<div className='w-full md:w-1/2 px-3'>

<label htmlFor='cliente'
 className='block 
 uppercase tracking-wide
  text-gray-700 
  text-xs font-bold mb-2'>
    LastName: </label>

<input  
type='text' 
 name='lastName' 
value={cliente.lastName} 
onChange={handleInputChange} 
className='appearance-none
block w-full
bg-gray-200
text-gray-700
border border-blue-500
rounded py-3 px-4
leading-tight
focus:outline-none
focus:bg-white
focus:border-gray-500'
 placeholder='Ingrese su apellido' />
 </div>

 <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>


<label htmlFor='cliente' 
className='block uppercase tracking-wide
text-gray-700
text-xs font-bold
mb-2'>
Phone:
</label>


<input  type='text' 
 name='phone' 
value={cliente.phone}
 onChange={handleInputChange}
  className='appearance-none
  block w-full
  bg-gray-200
  text-gray-700
  border
  border-blue-500
  rounded py-3 px-4
  leading-tight
  focus:bg-white
  focus:border-gray-500
  ' placeholder='Ingrese su número' 
  />
</div>

<div className='w-full md:w-1/2 px-3'>

<label htmlFor='cliente'
 className='block uppercase
 tracking-wide text-gray-700
 text-xs font-bold mb-2'>
Age: </label>

<input  type='text'
 name='age' 
 value={cliente.age}
  onChange={handleInputChange} 
  className='appearance-none
  block w-full
  bg-gray-200 
  text-gray-700 border
  border-blue-500
  rounded py-3 px-4
  mb-3 leading-tight
  focus:outline-none
  focus:bg-white
  focus:border-gray-500
  ' placeholder='Ingrese su edad' />
</div>
    </div>
    <div className='flex-justify-end ml-[140px]'>
        <button onClick={handleSubmit}
         type='submit'
          className='px-4 py-2 text-black
           bg-blue-600 text-ms font-medium rounded-md'>
Guardar
        </button>
<button onClick={closeModal} type='button' className='px-4 py-2 bg-gray-200 text-gray-800 text-m font-medium rounded-md ml-2 '>
Cancelar
</button>
    </div>
</form>
</div>
        // </div>
    )}
</div>

    
    </div>
)



}