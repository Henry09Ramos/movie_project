import React, { ReactElement,useState} from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { IoFolder } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { MdContactEmergency } from "react-icons/md";
import { CgClapperBoard } from "react-icons/cg";
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


interface LayoutNavProps {
    children: ReactElement;
  }

export default function LayoutNav (props: LayoutNavProps){

    const [open, setOpen] = useState(true)
    // const handleLinkClick = () => {
    //     setOpen(!open);
    //   }
    
// return (
// <>
// <div className="flex">
// <div className={`bg-blue-900
// h-screen p-5 pt-8  ${open ? 'w-72' : 'w-20'}
//  duration-500 relative text-black`} >
    
// <BsArrowLeftShort 
// className={`bg-white text-blue-950
//     text-3xl rounded-full absolute -right-3 top-9 border 
//     border-blue-950 cursor-pointer ${!open && "rotate-180"}`}
//     onClick={()=> setOpen (!open)}/>

//     <div className="p-2">
// <IoFolder   className="text-white text-4xl rounded cursor-pointer block float-left mr-2 "/>
// <h1 className={`text-white origin-left font-medium text-2xl text-lay-white duration-200 ${!open ? "px-20":"px-2" }`}>
// Movie Project
// </h1>
//     </div>
//     <hr/>
    
//     <div className='p-1'>
//         <div className='mt-[20px]'>
//         <FaRegUserCircle   className='text-white text-3xl cursor-pointer block float-left mr-2'/>
// <a href='#' className={`text-white origin-left font-medium text-1xl text-lay-white ${!open ? "px-20": "px-2"}`}>
// Users
// </a>
// </div>
//     </div>
    
// <div className='p-1'>
//     <div className='mt-[20px]'>
// <FaUserPlus   className='text-white text-3xl cursor-pointer block float-left mr-3 '/>

//         <a href='/cliente' className={` text-white origin-left font-medium text-1xl text-lay-white ${!open ? "px-20": "px-2"} `} >

// Client
// </a>
// </div>
//     </div>

//     <div className='p-1'>
//     <div className='mt-[20px]'>
//     <MdMovie  className='text-white text-3xl cursor-pointer block float-left mr-3 '/> 

// <a href='/movie' className={` text-white origin-left font-medium text-1xl ${!open ? "px-20": "px-2"} `}>
//     Movie 
// </a>
// </div>
//     </div>


//     <div className='p-1'>
//         <div className='mt-[20px]'>
//         <MdContactEmergency className='text-white text-3xl cursor-pointer block float-left mr-3 '/>
//         <a href='/list' className={`text-white origin-left font-medium text-1xl text-lay-white ${!open ? "px-20": "px-2"}`} >
// Genero 
//         </a>
//         </div>
//     </div>

//     <div className='p-1'>
//         <div className='mt-[20px]'>
//         <CgClapperBoard className='text-white text-4xl cursor-pointer block float-left mr-3 text-lay-white '/>
// <a href='#' className={` text-white origin-left font-medium text-1xl ${!open ? "px-20" : "px-2"}`}>
// RentMovie
//    </a>
//    </div>
//     </div>
//     <div className={`w-full ${open? 'ml-72 p-6': 'ml-16  p-6'} duration-500`}>

//     {props.children}

//     </div>
   
// </div>


// </div>
// </>
// )
// }

return (
    <>
    <div className=" flex flex-row ">
    <div className={`bg-blue-900
    h-screen p-5 pt-8  ${open ? 'w-72' : 'w-20'}
     duration-500  text-black fixed`} >
        
    <BsArrowLeftShort 
    className={`bg-white text-blue-950
        text-3xl rounded-full absolute -right-3 top-9 border 
        border-blue-950 cursor-pointer ${!open && "rotate-180"}`}
        onClick={()=> setOpen (!open)}/>
    
        <div className="p-2">
    <IoFolder   className="text-white text-4xl rounded cursor-pointer block float-left mr-2 "/>
    <h1 className={`text-white origin-left font-medium text-2xl text-lay-white duration-200 ${!open ? "px-20":"px-2" }`}>
    Movie Project
    </h1>
        </div>
        <hr/>
        
        <div className='p-1'>
            <div className='mt-[20px]'>
            <FaRegUserCircle   className='text-white text-3xl cursor-pointer block float-left mr-2'/>
    <a href='#' className={`text-white origin-left font-medium text-1xl text-lay-white ${!open ? "px-20": "px-2"}`}>
    Users
    </a>
    </div>
        </div>
        
    <div className='p-1'>
        <div className='mt-[20px]'>
    <FaUserPlus   className='text-white text-3xl cursor-pointer block float-left mr-3 '/>
    
            <a href='/cliente' className={` text-white origin-left font-medium text-1xl text-lay-white ${!open ? "px-20": "px-2"} `} >
    
    Client
    </a>
    </div>
        </div>
    
        <div className='p-1'>
        <div className='mt-[20px]'>
        <MdMovie  className='text-white text-3xl cursor-pointer block float-left mr-3 '/> 
    
    <a href='/movie' className={` text-white origin-left font-medium text-1xl ${!open ? "px-20": "px-2"} `}>
        Movie 
    </a>
    </div>
        </div>
    
    
        <div className='p-1'>
            <div className='mt-[20px]'>
            <MdContactEmergency className='text-white text-3xl cursor-pointer block float-left mr-3 '/>
            <a href='/list' className={`text-white origin-left font-medium text-1xl text-lay-white ${!open ? "px-20": "px-2"}`} >
    Genero 
            </a>
            </div>
        </div>
    
        <div className='p-1'>
            <div className='mt-[20px]'>
            <CgClapperBoard className='text-white text-4xl cursor-pointer block float-left mr-3 text-lay-white '/>
    <a href='/rentmovie' className={` text-white origin-left font-medium text-1xl ${!open ? "px-20" : "px-2"}`}>
    RentMovie
       </a>
       </div>
        </div>
        
       
    </div>
    <div className={`w-full ${open? 'ml-72 p-6': 'ml-20  p-6'} duration-500`}>
    
        {props.children}
    
        </div>
    
    </div>
    </>
    )
    }
