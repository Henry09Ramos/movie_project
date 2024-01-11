import { IoCreateOutline } from "react-icons/io5";
import useGeneroStore from "../../store/genero.store";
import React, {  useState } from "react";
import useMovieStore from "../../store/movie.store";

const MovieUpdate = ({
  id,
  generoIdMovie,
  titleMovie,
  durationMovie,
  directorMovie,
  languageMovie,
  imageMovie,
  rankingMovie,
}: {
  id: number;
  generoIdMovie: number;
  titleMovie: string;
  durationMovie: string;
  directorMovie: string;
  languageMovie: string;
  imageMovie: string;
  rankingMovie: string;
}) => {
  const { generos, OnGetGeneros } = useGeneroStore();
  const { OnUpdateMovie } = useMovieStore();
  const [title, setTitle] = useState(titleMovie);
  const [genero, setGenero] = useState(generoIdMovie);
  const [duration, setDuration] = useState(durationMovie);
  const [director, setDirector] = useState(directorMovie);
  const [language, setLanguage] = useState(languageMovie);
  const [image, setImage] = useState(imageMovie);
  const [ranking, setRanking] = useState(rankingMovie);
  const [isOpenModal, setIsOpenModal] = useState(false);

  React.useEffect(() => {
    OnGetGeneros();
  }, []);

  
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    setTitle(titleMovie);
    setGenero(generoIdMovie);
    setDuration(durationMovie);
    setDirector(directorMovie);
    setLanguage(languageMovie);
    setImage(imageMovie);
    setRanking(rankingMovie);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };


  const handleInputChangeDuration = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setDuration(e.target.value)
  }

  const handleInputChangeDirector = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setDirector(e.target.value)
  }

  const handleInputChangeLanguage = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setLanguage(e.target.value)
  }

  const handleInputChangeRanking = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setRanking(e.target.value)
  }
  
  const handleInputChangeImage = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setImage(e.target.value)
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenero(Number(e.target.value));
  };

  const handleSubmit = async () => {
    if (title.trim() !== "") {
      const updateMovie = {
        id: id,
        generoId: genero,
        title: title,
        duration: duration,
        director: director,
        language: language,
        image: image,
        ranking: ranking
      };
      await OnUpdateMovie(id, updateMovie);
      closeModal();
    }
  };

  return (
    <>
      <div className="p-2 flex items-center justify-end opacity-100">
        <button
          className=" text-green-700 font-bold py-4 px-4 m-3 rounded-full flex items-center text-center"
          onClick={openModal}
        >
          <IoCreateOutline size={20} />
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
                      id="titleMovie"
                      name="titleMovie"
                      defaultValue={title}
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
                      name="durationMovie"
                      defaultValue={duration}
                      onChange={handleInputChangeDuration}
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
                      name="directorMovie"
                      defaultValue={director}
                      onChange={handleInputChangeDirector}
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
                      name="languageMovie"
                      value={language}
                      onChange={handleInputChangeLanguage}
                      placeholder="Add language"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block 
  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                      Image
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
                      name="imageMovie"
                      value={image}
                      onChange={handleInputChangeImage}
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
                      name="rankingMovie"
                      value={ranking}
                      onChange={handleInputChangeRanking}
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
                        id="generoIdMovie"
                        name="generoIdMovie"
                        value={genero}
                        onChange= {handleSelectChange}
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
};
export default MovieUpdate;
