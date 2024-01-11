import useRentMovieStore from "../../store/rentMovie.store"
import LayoutNav from "../Layout"
import {useEffect, useState} from 'react'
import CreateRentMovie from "./createRentMovie"
import UpdateRentMovie from "./updateRentMovie"
import { IoMdTrash } from "react-icons/io"

export default function TableRentMovie(){
const {rentmovie, OnGetRentMovie, OnDeleteRentMovie} = useRentMovieStore()
const [RentmovieDelete, setRentMovieDelete] = useState<{
    id: number
    id_movie: number,
    id_costumer: number,
    devolution_date: number,
    amount: number,
    price: number,
} | null> (null)


useEffect(() =>{
    OnGetRentMovie()
},[])

const confirmDelete = () =>{
    if(RentmovieDelete){
        OnDeleteRentMovie(RentmovieDelete.id)
        setRentMovieDelete(null)
    }
}

const cancelDelete =()=>{
    setRentMovieDelete(null)
}

return (

    <>
    <LayoutNav>
    <div>

        <div>
            <h3 className='text-2xl font-semibold flex justify-center'
            >Rent Movie
            </h3>
            <CreateRentMovie />

     
    <div className='flex justify-center'>

<table className="text-left w-full">
	<thead className="bg-gray-900 flex text-white w-full">
		<tr className="flex w-full text-xs md:text-sm">
			<th className="p-4 w-1/4">movie</th>
			<th className="p-4 w-1/4">client</th>
			<th className="p-4 w-1/4">devolution date</th>
			<th className="p-4 w-1/4">amount</th>
			<th className="p-4 w-1/4">price</th>
			<th className="p-4 w-1/4">sub total</th>
			<th className="p-4 w-1/4">total</th>
			<th className="p-4 w-1/4">Actions</th>
			
		</tr>
	</thead>
	<tbody className="bg-grey-light flex flex-col items-center justify-between w-full">
        {rentmovie && rentmovie.map((items) =>(
		<tr  key={items.id}
        className="flex w-full 
        text-sm border-b border-gray-100"
        >
			<td className="p-4 w-1/4">{items.movie.title}</td>
			<td className="p-4 w-1/4">{items.cliente.name}</td>
            <td className="p-4 w-1/4">{items.devolution_date}</td>
			<td className="p-4 w-1/4">{items.amount}</td>
			<td className="p-4 w-1/4">{items.price}</td>
			<td className="p-4 w-1/4">{items.subTotal}</td>
			<td className="p-4 w-1/4">{items.total}</td>
			<td className="p-4 w-1/4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* <button className="bg-red-500 text-white w-10 h-10 rounded-full">
                        <i className="fa-solid fa-trash"></i>
                    </button> */}
                    <UpdateRentMovie
                    id={items.id}
                    id_costumerNew={items.id_costumer}
                   id_movieNew={items.id_movie}
                   devolution_dateNew={items.devolution_date}
                    amountNew={items.amount}
                    priceNew={items.price}
                    />
                    <div >
                    <button className='text-red-500 '>
                        <IoMdTrash className="text-4xl"/>
                    </button> 
                    </div>
                   
                </div>
            </td>
		</tr>
         ))
        }
    </tbody>
</table>
</div>
</div>
{RentmovieDelete &&(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
        <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Deseas eliminar este registro"{RentmovieDelete.devolution_date}"?</p>
       <div className='mt-4 flex justify-center'>
<button 
onClick={confirmDelete}
className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full ">
Delete
</button>
<button 
onClick={cancelDelete}
className='bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full ml-4 '>
Cancel
</button>

       </div>
        </div>

    </div>
)}
</div>

</LayoutNav>
</>
)
}