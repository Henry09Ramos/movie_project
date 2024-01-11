import { CiCirclePlus } from "react-icons/ci";
import useGeneroStore from "../../store/genero.store";
import { ICreateMovie } from "../../types/movie.types";
import useMovieStore from "../../store/movie.store";
// import { FaPlus } from "react-icons/fa"
import React, { useState } from "react";

export default function CreateMovie() {
  const { generos, OnGetGeneros } = useGeneroStore();
  const { OnCreateMovie } = useMovieStore();
  const [isOpenModal, setOpenModal] = useState(false);

  React.useEffect(() => {
    OnGetGeneros();
  }, []);

  const [movie, setMovie] = useState<ICreateMovie>({
    title: '',
    duration: '',
    director: '',
    language: '',
    image: '',
    ranking: '',
    generoId: 0

  });

  const openModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {name, value } = e.target
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
if(!movie.title || !movie.duration || !movie.director || !movie.language || !movie.image || !movie.ranking || movie.generoId === 0){
  alert('error')
  return
}

try{
  await OnCreateMovie(movie)
  closeModal()
}catch(error){
  console.error("Error creating user: ", error)
}

}


  return (
    <>
      <div className="p-2 flex items-center opacity-100 ">
        <button
          className=" text-green-700 font-bold py-4 px-4 m-3 rounded-full flex items-center text-center"
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
                      Title
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
                      name="title"
                      // value={movie.title}
                      onChange={handleInputChange}
                      placeholder="Example the title"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Duration
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
                      name="duration"
                      // value={movie.duration}
                      onChange={handleInputChange}
                      placeholder="00:00:00:00"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Director
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
                      name="director"
                      // value={movie.director}
                      onChange={handleInputChange}
                      placeholder="Addres your director"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      language
                    </label>
                    <input
                      className="appearance-none 
      block w-full bg-gray-200
       text-gray-700  
       border rounded py-3 px-4 mb-3 
       leading-tight focus:outline-none
        focus:bg-white"
                      type="text"
                      name="language"
                      // value={movie.language}
                      onChange={handleInputChange}
                      placeholder="Add language"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block 
      uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                      Image{" "}
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
                      name="image"
                      // value={movie.image}
                      onChange={handleInputChange}
                      placeholder="Add your image and Url"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Ranking
                    </label>
                    <input
                      className="appearance-none 
      block w-full bg-gray-200
       text-gray-700 border
        border-gray-200 rounded 
        py-3 px-4 leading-tight 
        focus:outline-none focus:bg-white 
        focus:border-gray-500"
                      type="text"
                      name="ranking"
                      // value={movie.ranking}
                      onChange={handleInputChange}
                      placeholder="0-10"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Genero{" "}
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200
         text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none
          focus:bg-white
           focus:border-gray-500"
                        name="generoId"
                        value={movie.generoId}
                        onChange={(e) => handleInputChange(e)}
                      >
                        <option value="">Seleccione un genero</option>
                        {generos.map((genero) => (
                          <option key={genero.id} value={genero.id}>
                            {genero.type}
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
