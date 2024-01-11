// import LayoutNav from "../Layout"
import {useEffect, useState} from  "react"
import useMovieStore from "../../store/movie.store"
import { IoMdTrash } from 'react-icons/io';
import CreateMovie from "./createMovie";
import Navbar from './../layout'
import MovieUpdate from "./updateMovie";


export default function TableMovie(){
const {movies, OnGetMovie, OnDeleteMovie}= useMovieStore()
const [movieDelete, setMovieDelete] = useState<{
	id: number
	title:string
} | null>(null)

useEffect(() =>{
	OnGetMovie()
},[])


const handleDelete = (id: number, title: string) =>{
	setMovieDelete({id, title})
}

const confirmDelete = () =>{
	if(movieDelete){
		OnDeleteMovie(movieDelete.id)
		setMovieDelete(null)
	}
}

const cancelDelete = () =>{
	setMovieDelete(null)
}
    return(
<>
    <nav>
      <Navbar />
		<h3 className='text-2xl  font-semibold '>Movie</h3>
        <div className=' '>
			<div className=' '>
		     <CreateMovie />
           </div>
			

       <div className="container mx-auto ">
        <table className=" w-full text-sm text-left rtl:text-right ">
	<thead className="bg-gray-900 flex text-white w-full">
		<tr className="flex w-full text-sm">
			<th className="p-4 w-1/4">Genero</th>
			<th className="p-4 w-1/4">Title</th>
			<th className="p-4 w-1/4">Duration</th>
			<th className="p-4 w-1/4">Director</th>
			<th className="p-4 w-1/4">Language</th>
			<th className="p-4 w-1/4">Image</th>
			<th className="p-4 w-1/4">Ranking</th>
			<th className="p-4 w-1/4">Action</th>
		</tr>
	</thead>
	<tbody className="bg-grey-light flex flex-col items-center justify-between  w-full ">
		{movies && movies.map((items) =>(

		<tr key={items.id} className="flex w-full text-sm border-b border-gray-100">
			<td className="p-4 w-1/4">{items.genero.type}</td>
			<td className="p-4 w-1/4">{items.title}</td>
			<td className="p-4 w-1/4">{items.duration}</td>
			<td className="p-4 w-1/4">{items.director}</td>
			<td className="p-4 w-1/4">{items.language}</td>
			<td className="p-4 w-1/4">
				<img width={90} height={65} src={items.image}></img>
				</td>
			<td className="p-4 w-1/4">{items.ranking}</td>
			<td className="p-4 w-1/4">
				
                <div className="flex justify-between ">
<MovieUpdate id={items.id} 
generoIdMovie={items.generoId} 
titleMovie={items.title} 
durationMovie={items.duration}
 directorMovie={items.director}
  languageMovie={items.language}
   imageMovie={items.image} 
   rankingMovie={items.ranking} />

                    <button 
					onClick={() => handleDelete(items.id, items.title)}
					className=" text-green-600  w-10 h-10 rounded-full ">
                    </button>
					
                    <button className=" text-red-600 w-10 h-10 rounded-full ">
                        
						<IoMdTrash size={30} />
                    </button>
                </div>
            </td>
		</tr>
		))}

    </tbody>
</table>
</div>
</div>

{movieDelete &&(
	<div className='fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50 '>
		<div className='bg-white p-4 rounded-lg shadow-lg'>
			<p>Deseas eliminar este registro "{movieDelete.title}"?</p>
<div className='mt-4 flex justify-center'>
	<button 
	onClick={confirmDelete}
	className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full '>
Delete
	</button>
<button
onClick={cancelDelete}
className='bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full ml-4'>
Cancelar

</button>
</div>
		</div>

	</div>
)}
</nav>
   </>

    )
}