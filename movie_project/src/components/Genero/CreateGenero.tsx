import React, {useState} from 'react'
import { CiCirclePlus } from "react-icons/ci";
import useGeneroStore from '../../store/genero.store';



export default function CreateGenero(){
    const{onCreateGenero} = useGeneroStore()
    const[type, setType] = useState('')
    const [showModal, setShowModal] = useState(false)



    const closeModal = () =>{
        setShowModal(false)
    }
    const openModal=()=>{
        setShowModal(true)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
setType(e.target.value)
    }


const handleSubmit = async()=>{
    if(type.trim() !== ''){
        await onCreateGenero(type)
        closeModal()
    }
}

return(

<div className='bg-white p-2 flex justify-center opacity-100'>
<button onClick={openModal} className="px-4 py-2 rounded-full mr-[1200px]  items-end ">
  
  <CiCirclePlus size={40} color='blue'/>
  </button>
  {showModal &&(
 <div className='fixed inset-30 fel justify-center z-50  bg-opacity'>
 <div className='bg-white  rounded-lg shadow-lg p-6'>
     <h3 className='text-lg font-medium mb-4 text-center'>Añadir Genero</h3>
     <form >
         <div className='mb-4'>
           <label htmlFor='genero' className='block text-gray-700 text-sm font-medium'>Genero:</label>
         <input type='text' value={type} onChange={handleInputChange} className='w-full h-10 p-4 border rounded-xl ' placeholder='Ingrese su genero'/>

         </div>
         <div className='flex-justify-end'>
             <button onClick={handleSubmit} type='submit' className='px-4 py-2 text-black bg-blue-600 text-ms font-medium rounded-md'>
                 Guardar
             </button>
             <button onClick={closeModal} type='button' className='px-4 py-2 bg-gray-200 text-gray-800 text-m font-medium rounded-md ml-2'>
                 Cancelar
             </button>

         </div>

     </form>

 </div>

</div>
  )}

</div>


)

}


