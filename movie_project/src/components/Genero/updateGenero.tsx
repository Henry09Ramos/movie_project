
import React, { useState } from "react";
import useGeneroStore from "../../store/genero.store";
import { IoCreateOutline } from "react-icons/io5";


const UpdateGenero = ({generoId, generoNameUpdate}: {generoId: number, generoNameUpdate: string}) => {
    const [showModal, setShowModal] = useState(false);
    const [newGeneroName, setNewGeneroName] = useState(generoNameUpdate);
    const {onUpdateGenero} = useGeneroStore();

    const closeModal = () => {
        setShowModal(false)
        setNewGeneroName(generoNameUpdate)
      }
             
    
    const openModal = () => {
        setShowModal(true)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewGeneroName(e.target.value)
    }

    const handleSubmit = async () => {
        if (newGeneroName.trim() !== ''){
            await onUpdateGenero(generoId, newGeneroName);
            closeModal();
        }
    }



    return (
        <div>
          
          <button onClick={openModal}  className="flex justify-center py-2 px-2 text-green-500">
            {/* <FaRegEdit size={25}></FaRegEdit> */}
            <IoCreateOutline/>
          </button>         
    
          {showModal &&(
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <span onClick={closeModal}></span>
                <h3 className="text-lg font-medium mb-4 text-center">Editar Genero</h3>
                <form >
                  <div className="mb-4">
                    <label htmlFor="genero" className="block text-gray-700 text-sm font-medium">Genero:</label>
                    <input type="text" value={newGeneroName} onChange={handleInputChange}  className="w-full h-10 p-4 border rounded-xl" placeholder="Ingrese el genero"/> 
                  </div>
                  <div className="flex justify-end">
                    <button onClick={handleSubmit}  className="px-4 py-2 text-black bg-blue-600 text-sm font-medium rounded-md">
                      Guardar
                    </button>
                    <button onClick={closeModal} type="button" className="px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-md ml-2">
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        
        </div>
      );
}

export default UpdateGenero