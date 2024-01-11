import  {useState} from 'react'
import useClientStore from '../../store/client.store'
import { IoCreateOutline } from 'react-icons/io5'


const UpdateClient =({
    id, 
    newName,
    newLastName,
    newPhone,
    newAge,
}:{
    id:number,
    newName: string,
    newLastName: string,
    newPhone: string,
    newAge: string

})=>{
const {OnUpdateClient} = useClientStore()
const [name, setName] = useState(newName)
const [lastName, setLastName] = useState(newLastName)
const [phone, setPhone]= useState(newPhone)
const [age, setAge] = useState(newAge)


const [showModal, setShowModal] = useState(false)

const openModal = () =>{
    setShowModal(true)
}

const closeModal = () =>{
    setShowModal(false)

}

const handleInputChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setName(e.target.value)
}



const handleInputChangeLastName = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setLastName(e.target.value)
}


const handleInputChangePhone = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setPhone(e.target.value)
}

const handleInputChangeAge = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setAge(e.target.value)
}

const handleSubmit = async () =>{
    if(name. trim() !== '' ){
        const updateClient ={
            id: id,
            name: name,
            lastName: lastName,
            phone: phone,
            age: age
        }
        await OnUpdateClient(id, updateClient)
        closeModal()
    }
}

return (
<div>
  <div className='opacity-100'>

    <button 
    onClick={openModal}
    className='flex justify-center py-1 px-1 text-green-600 '
    >
<IoCreateOutline size={22} />
    </button>

    {showModal &&(
 <div className='fixed inset-0 flex items-center z-50 bg-black bg-opacity-50 justify-center p-10'>
 <form className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 ">
 <h3 className='text-2xl font-semibold mb-4 flex justify-center ' >Update Client</h3>
 
   <div className="flex flex-wrap -mx-3 mb-6">
     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
       <label className="block 
       uppercase tracking-wide
        text-gray-700 
        text-xs font-bold mb-2" 
        >
         Name
       </label>
       <input
        className="appearance-none 
        block w-full
         bg-gray-200
          text-gray-700 border
           border-blue-500 
           rounded py-3 px-4 
           mb-3 leading-tight 
           focus:outline-none
            focus:bg-white"
              type="text" 
              placeholder="Add your name "
              value={name}
              onChange={handleInputChangeName}
              />
       
     </div>
     <div className="w-full md:w-1/2 px-3">
       <label className="block 
       uppercase tracking-wide
        text-gray-700 
        text-xs font-bold mb-2
           ">
         LastName
       </label>
       <input 
       className="appearance-none
        block w-full
         bg-gray-200
          text-gray-700
           border border-blue-500
            rounded py-3 px-4
             leading-tight 
             focus:outline-none
              focus:bg-white
               focus:border-gray-500"
                id="lastName" 
                type="text" 
                placeholder="LastName"
                value={lastName}
                onChange={handleInputChangeLastName}

            />
     </div>
 
     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
       <label className="block 
       uppercase tracking-wide
        text-gray-700 
        text-xs font-bold
         mb-2">
 Phone      
 </label>
       <input className="appearance-none
        block w-full
         bg-gray-200
          text-gray-700
           border
            border-blue-500  
            rounded py-3 px-4 
            leading-tight
             focus:outline-none
              focus:bg-white
               focus:border-gray-500"
                id="phone" 
                type="text" 
                placeholder="Add your phone"
                value={phone}
                onChange={handleInputChangePhone}
                />
     </div>
 

     <div className="w-full md:w-1/2 px-3">
       <label className="block uppercase 
       tracking-wide text-gray-700 
       text-xs font-bold mb-2" >
            Age      
 </label>
       <input className="appearance-none 
       block w-full bg-gray-200
        text-gray-700 border
         border-blue-500 
         rounded py-3 px-4
          mb-3 leading-tight 
          focus:outline-none
           focus:bg-white
            focus:border-gray-500"
             id="age"
              type="text" 
              placeholder="Add Age"
              value={age}
              onChange={handleInputChangeAge}
              />
       <p className="text-gray-600 text-xs italic">Add your date </p>
       <br/>
   </div>

     </div>
     <div className='flex justify-center '> 
     <button onClick={handleSubmit}
     className='px-4 py-2
      text-black bg-blue-600 text-sm font-medium rounded-md '
     >
        Update
     </button>
<button 
onClick={closeModal}
type='button'
className='px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-md ml-2 '
>
Cancel
</button>
     </div>
 
 </form>
 </div>

    )}
  </div>

</div>




 

)


}
export default UpdateClient