import useRentMovieStore from "../../store/rentMovie.store"
import useMovieStore from "../../store/movie.store"
import useClientStore from "../../store/client.store"
import React, {useState} from 'react'
import { IoCreateOutline } from "react-icons/io5"


const UpdateRentMovie =({
    id,
    id_movieNew,
    id_costumerNew,
    devolution_dateNew,
    amountNew,
    priceNew,

}:{
    id:number,
    id_movieNew: number,
    id_costumerNew: number,
    devolution_dateNew: string,
    amountNew: number,
    priceNew: number
}) =>{
const {movies, OnGetMovie} = useMovieStore()
const{clients, OnGetClient}= useClientStore()
const {OnUpdateRentMovie} = useRentMovieStore()
const [movie, setMovie] = useState(id_movieNew)
const[costumer, setCostumer] = useState(id_costumerNew)
const[devolution, setDevolution] = useState(devolution_dateNew)
const[amount, setAmount] = useState(amountNew)
const[price, setPrice] = useState(priceNew)
const[isOpenModal, setIsOpenModal] = useState(false)

React.useEffect(() =>{
    OnGetMovie()
},[])


React.useEffect(() =>{
    OnGetClient()
},[])

const openModal=()=>{
    setIsOpenModal(true)
} 


const closeModal = () =>{
    setIsOpenModal(false)
    setMovie(id_movieNew)
    setCostumer(id_costumerNew)
    setDevolution(devolution_dateNew)
    setAmount(amountNew)
    setPrice(priceNew)
}

const handleSelectChange =(e: React.ChangeEvent<HTMLSelectElement>) =>{
setMovie(Number(e.target.value))
}

const handleSelectChangeCostumer = (e: React.ChangeEvent<HTMLSelectElement>) =>{
    setCostumer(Number(e.target.value))
}

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setDevolution(e.target.value)
}

const handleInputChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setAmount(Number(e.target.value))
}

const handleInputChangePrice =(e: React.ChangeEvent<HTMLInputElement>) =>{
    setPrice(Number(e.target.value))
}

const handleSubmit = async() =>{
    if(devolution.trim() !==""){
        const updateRentMovie={
            id: id,
            id_movie: movie,
            id_costumer: costumer,
            devolution_date: devolution,
            amount: amount,
            price:price

        }
        await OnUpdateRentMovie(id, updateRentMovie)
        closeModal()
    }
}

return(
    <>
     <div className="flex items-center opacity-200 ">
      <button
        className="text-green-700 font-bold  rounded-full items-center text-center"
        onClick={openModal}
      >
        <IoCreateOutline size={40} />
      </button>

      {isOpenModal && (
  <div className=" fixed inset-0 flex items-center justify-end z-10 bg-black bg-opacity-50 ">
  <div className="bg-white  rounded-lg  flex justify-end">
    <form className="w-full max-w-lg  p-10 mt-[100px]">
      <div className="flex flex-wrap -mx-3 mb-2 ">
        <div className="w-full px-3 ">
          <label
            className="block 

uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            price
          </label>
          <input
            className="appearance-none 
block w-full bg-gray-200
text-gray-700 border
border-gray-200 
rounded py-3 px-4 mb-3 
leading-tight focus:outline-none
focus:bg-white focus:border-gray-500"
            type="text"
            name="price"
            value={price}
            onChange={handleInputChangePrice}
            placeholder="$0000"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            amount
          </label>
          <input
            className="appearance-none 
block w-full bg-gray-200
text-gray-700  
border rounded py-3 
px-4 mb-3 leading-tight 
focus:outline-none 
focus:bg-white"
            type="text"
            name="amount"
            value={amount}
            onChange={handleInputChangeAmount}
            placeholder="0-50"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
devolution date
          </label>
          <input
            className="appearance-none
block w-full bg-gray-200
text-gray-700 border
border-gray-200 
rounded py-3 px-4 
leading-tight 
focus:outline-none
focus:bg-white
 focus:border-gray-500"
            type="text"
            name="devolution_date"
            value={devolution}
            onChange={handleInputChange}
            placeholder="09:01:00:23/03/2024"
          />
       </div>
      </div>
    

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Movie
          </label>
         <div className="relative" >
<select className="block appearance-none w-full bg-gray-200 border-gray-200  
text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
name="id_movie"
value={movie}
onChange={ handleSelectChange}
>
<option value="">Select a movie</option>
{movies.map((movie) =>(
  <option key={movie.id} value={movie.id}>
    {movie.title}
  </option>
))}
</select>
         </div>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Costumer
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200
text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none
focus:bg-white
 focus:border-gray-500"
              name="id_costumer"
              value={costumer}
              onChange={handleSelectChangeCostumer}
            >
              <option value="">Select a costumer</option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>
      </div>
      <br />
      <div className="flex justify-center ">
        <button
          className="px-4 py-2
text-black bg-blue-600 text-sm font-medium rounded-md "
          onClick={handleSubmit}
          type="button"
        >
          Guardar
        </button>
        <button
          onClick={closeModal}
          type="button"
          className="px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-md ml-2 "
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>
      )}
    </div>
    </>
)


}


export default UpdateRentMovie