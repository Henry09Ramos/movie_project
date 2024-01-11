import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import useUserStore from '../../store/user.store';
import { ICreateUser } from '../../types/user.types';

export default function CreateUser() {
  const { onCreateUser } = useUserStore();
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<ICreateUser>({
   name: '',
   email: '', 
   password: '' });
  

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    
      if (!user.name|| user.email || user.password) {
        alert('Todos los campos son obligatorios');
        return;
      }
try {
      await onCreateUser(user);
      closeModal();
    } catch (error) {
      console.log('Error al crear el usuario:',error);
    }
  };

  return (
    <div className="bg-white p-2 flex justify-center opacity-100">
      <button onClick={openModal} className="px-4 py-2 rounded-full mr-[1200px]  items-end">
        <CiCirclePlus size={40} color="black" />
      </button>
      {showModal && (
        <div className="fixed inset-30 fel justify-center z-50  bg-opacity">
          <div className="bg-white  rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-medium mb-4 text-center">Crear Usuario</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium">
                  Nombre:
                </label>
                <input type="text"
                //  value={user.name}
                  onChange={handleInputChange}
                  className="w-full h-10 p-4 border rounded-xl" placeholder="Ingrese su nombre"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium">
                  Email:
                </label>
                <input type="email" 
                // value={user.email} 
                onChange={handleInputChange}
                  className="w-full h-10 p-4 border rounded-xl" placeholder="Ingrese su email" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
                  Contraseña:
                </label>
                <input
                  type="password"
                  // value={user.password}
                  onChange={handleInputChange}
                  className="w-full h-10 p-4 border rounded-xl"
                  placeholder="Ingrese su contraseña"
                />
              </div>
              <div className="flex-justify-end">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="px-4 py-2 text-black bg-blue-600 text-ms font-medium rounded-md"
                >
                  Guardar
                </button>
                <button
                  onClick={closeModal}
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-800 text-m font-medium rounded-md ml-2"
                >
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
// export default CreateUser