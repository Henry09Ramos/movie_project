import { useEffect ,useState} from "react";
import useGeneroStore from "../../store/genero.store";
// import { IoCreateOutline } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";
import CreateGen from "./CreateGenero";
import UpdateGenero from "./updateGenero";
// import LayoutNav from "../Layout";
import Navbar from './../layout'

export default function CreateGenero() {
 
  const { generos, OnGetGeneros, OnDeleteGenero } = useGeneroStore();
  const [generoToDelete, setGeneroToDelete] = useState <{id:number, type:string} | null>(null)

  useEffect(() => {
    OnGetGeneros();
  }, [])

  const handleDelete = (id:number ,type:string) =>{
      setGeneroToDelete({id,type})
  }

  const ConfirmDelete = ()=>{
      if(generoToDelete){
          OnDeleteGenero(generoToDelete.id)
          alert(`El registrado se ha eliminado`)
  setGeneroToDelete(null)
      }
  }

  const cancelToDelete = () =>{
      setGeneroToDelete(null)
  }
  return (
    <nav>
      <Navbar />
      <div className="text-center font-bold text-5 p-5 ">
        <h2 className="text-2xl font-semibold mb-4">GENERO</h2>
        <div className="text-center font-bold text-5  w-full">
        <CreateGen />
        <table className="text-left w-full ">
	<thead className="bg-gray-900 flex text-white ">
		<tr className="flex w-full text-xs md:text-sm">
			<th className="p-4 w-2/4 flex justify-center">Type</th>
			<th className="p-4 w-2/4 flex justify-center">Acciones</th>
		</tr>
	</thead>
    
	<tbody className="bg-grey-light flex flex-col items-center justify-between w-full ">
 {generos.map((items)=>(
      
		<tr key={items.id}className="flex w-full text-sm border-b border-gray-100">
			
			<td className="p-4 w-2/4 flex justify-center">{items.type}</td>

			<td className="p-4 w-2/4 flex justify-center">
        <div className="flex  md:flex-row">
        <UpdateGenero  generoId={items.id} generoNameUpdate={items.type}/>
        <button onClick={() => handleDelete(items.id, items.type)}
         className="bg-red-600 text-white w-10 h-10 rounded-full   ">
          <IoMdTrash className='ml-2' size={20}/>   
        </button>
        </div>
        </td>
		</tr>
))}
    </tbody>
</table>
        
      </div>
{generoToDelete && (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
<div className='bg-white p-4 rounded-lg shadow-lg'>
<p>¿Estas seguro que deseas eliminar este registro"{generoToDelete.type}"? </p>
<div className='mt-4  flex justify-center'  >

   <button onClick={ConfirmDelete} 
   className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full '>
    Acepto
    </button> 
    <button onClick={cancelToDelete} 
     className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4 '> 
    Cancelar
    </button>
</div>

</div>


    </div>

)}
 </div>
    </nav>
  );
}
