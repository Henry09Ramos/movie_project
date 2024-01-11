import React, { useState } from "react";
import useUserStore from "../../store/user.store";
import { IoCreateOutline } from "react-icons/io5";

const UpdateUser = ({ userId, userNameUpdate }: { userId: number, userNameUpdate: string}) => {
  const [showModal, setShowModal] = useState(false);
  const [newUserName, setNewUserName] = useState(userNameUpdate);
  const [newUserEmail, setNewEmail] = useState(""); // Agregado campo de email
  const [newPassword, setNewPassword] = useState(""); // Agregado campo de contraseña
  const { UpdateUser } = useUserStore();

  const closeModal = () => {
    setShowModal(false);
    setNewUserName(userNameUpdate);
    setNewEmail("");
    setNewPassword("");
  };

  const openModal = () => {
    setShowModal(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async () => {
    if (newUserName.trim() !== "" && newUserEmail.trim() !== "" && newPassword.trim() !== "") {
      await UpdateUser(userId, newUserName, newUserEmail, newPassword);
      closeModal();
    }
  };

  return (
    <div>
      <button onClick={openModal} className="flex justify-center py-2 px-2 text-green-500">
        <IoCreateOutline />
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <span onClick={closeModal}></span>
            <h3 className="text-lg font-medium mb-4 text-center">Editar Usuario</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium">
                  Nombre:
                </label>
                <input
                  type="text"
                  value={newUserName}
                  onChange={handleNameChange}
                  className="w-full h-10 p-4 border rounded-xl"
                  placeholder="Ingrese el nombre"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  value={newUserEmail}
                  onChange={handleEmailChange}
                  className="w-full h-10 p-4 border rounded-xl"
                  placeholder="Ingrese el email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
                  Contraseña:
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={handlePasswordChange}
                  className="w-full h-10 p-4 border rounded-xl"
                  placeholder="Ingrese la contraseña"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 text-black bg-blue-600 text-sm font-medium rounded-md"
                >
                  Guardar
                </button>
                <button
                  onClick={closeModal}
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-md ml-2"
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
};

export default UpdateUser;
