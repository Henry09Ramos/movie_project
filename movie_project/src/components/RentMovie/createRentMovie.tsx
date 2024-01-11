import useRentMovieStore from "../../store/rentMovie.store";
import useMovieStore from '../../store/movie.store'
import React, {useState} from 'react'
import { ICreateRentMovie } from "../../types/rentMovie.types";
import { CiCirclePlus } from "react-icons/ci";
import useClientStore from "../../store/client.store";

export default function CreateRentMovie(){
    const {movies, OnGetMovie} = useMovieStore()
    const{clients, OnGetClient} = useClientStore()
    const {OnCreateRentMovie} = useRentMovieStore()
    const [isOpenModal, setOpenModal] = useState(false)
 
    React.useEffect(() =>{
        OnGetMovie()
    },[])

    React.useEffect(() =>{
      OnGetClient()
    },[])

    const [rentmovie, setRentMovie] = useState<ICreateRentMovie>({
        id_movie: 0,
        id_costumer: 0,
        devolution_date: '',
        amount: 0,
        price: 0

    })
    const openModal =()=>{
        setOpenModal(true)
    }

    const closeModal=()=>{
        setOpenModal(false)
    }

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) =>{
        const {name, value} = e.target
        setRentMovie({
            ...rentmovie,
            [name]: value
        })
    }

    const handleSubmit = async () =>{
        if(!rentmovie.devolution_date || !rentmovie.amount || !rentmovie.price || rentmovie.id_movie == 0 || rentmovie.id_costumer ==0){
            alert('error')
            return
                
        }
   

    try{
        await OnCreateRentMovie (rentmovie)
        closeModal()
    
    }catch(error){
        console.error("Error creating user: ", error)
    }
}

return (
  <>
    <div className="flex items-center opacity-200 ">
      <button
        className="text-green-700 font-bold py-4 px-4 m-3 rounded-full items-center text-center"
        onClick={openModal}
      >
        <CiCirclePlus size={40} />
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
value={rentmovie.id_movie}
onChange={(e) => handleInputChange(e)}
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
              value={rentmovie.id_costumer}
              onChange={(e) => handleInputChange(e)}
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
);

}
