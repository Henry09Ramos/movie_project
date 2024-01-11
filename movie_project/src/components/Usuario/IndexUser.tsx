import { useEffect ,useState} from "react";
import { IoMdTrash } from "react-icons/io";
import Updateuser from "../../components/Usuario/UpdateUser"
import useUserStore from "../../store/user.store";
import { useNavigate } from 'react-router-dom';
// import CreateUser from './CreateUser';
import Navbar from './../layout'
// import SignUp from "./SignUp";
import { CiCirclePlus } from "react-icons/ci";

// import Pagination from "../pagination";

const IndexUser = () => {
  
  const { users, GetUsers, DeleteUser } = useUserStore();
  const [userToDelete, setUserToDelete] = useState <{id:number, name:string,email:string,password:string} | null>(null)
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    GetUsers();
  }, []);

  const handleDelete = (id:number, name:string,email:string,password:string) =>{
    setUserToDelete({id,name,email,password})
  }

  const ConfirmDelete = ()=>{
      if(userToDelete){
        DeleteUser(userToDelete.id)
          alert(`El registrado se ha eliminado`)
  setUserToDelete(null)
      }
  }

  const cancelToDelete = () =>{
      setUserToDelete(null)
  }

  const filteredUsers = users?.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
) || [];

const navigate = useNavigate();

const handleButtonClick = () => {
  // Navegar a la ruta /signup
  navigate('/user/signup');
};

 

  return (
    <>
    <nav>
      <Navbar />
      <div className="flex items-center">
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mr-2"
          /> 
          <button className="text-black" onClick={handleButtonClick}>
          <CiCirclePlus size={40} />
        </button> 
        </div>
          <table className="w-full border-collapse border border-gray-300 mt-4">
            <thead className="bg-gray-900 flex text-white w-full ">
              <tr className="flex w-full text-xs md:text-sm">
                <th className="p-4 w-2/4 flex justify-center">Nombre</th>
                <th className="p-4 w-2/4 flex justify-center">Email</th>
                
                <th className="p-4 w-2/4 flex justify-center">Acciones</th>
                {/* Agrega más columnas según tus necesidades */}
              </tr>
            </thead>
            <tbody>
            {filteredUsers.map((items) => (
        <tr key={items.id}className="flex w-full text-sm border-b border-gray-100">
				<td className="p-4 w-2/4 flex justify-center">{items.name}</td>
        <td className="p-4 w-2/4 flex justify-center">{items.email}</td>
        
			<td className="p-4 w-2/4 flex justify-center">
        <div className="flex  md:flex-row">
        <Updateuser  userId={items.id} userNameUpdate={items.name}/>
        <button onClick={() => handleDelete(items.id, items.name,items.email,items.password)}
         className="bg-red-600 text-white w-10 h-10 rounded-full   ">
          <IoMdTrash className='ml-2' size={20}/>   
        </button>
        </div>
        </td>
		</tr>
))}
            </tbody>
          </table>
          
{userToDelete && (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
<div className='bg-white p-4 rounded-lg shadow-lg'>
<p>¿Estas seguro que deseas eliminar este registro"{userToDelete.name}"? </p>
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
        {/* <Pagination
        currentPage={1}  // Reemplaza con la página actual de tu aplicación
        totalPages={5}    // Reemplaza con el número total de páginas en tu aplicación
        onPageChange={(page) => handlePageChange(page)}  // Reemplaza con tu función para cambiar de página
      /> */}
   </nav>
   </>
  );
};

export default IndexUser;