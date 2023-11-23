import {useEffect, useState} from "react"
import {useForm} from 'react-hook-form'
import {ICreateRol}  from '../../types/rol.types'
import {create_rol} from '../../service/rol.service'



 export default function CreateRol(){
    //estas constantes funcionan como para activar o desactivar el modal en la pantalla ya se soculta o se muestra sin necesidad de hacer click 
const [showmodal, setShowModal] = useState(false)

const [showAlert, setShowAlert] = useState (false)

//handleSubmit se utiliza o es una funcion que comunmente se maneja los formularios de manera logica 
const {handleSubmit, register, reset} = useForm<ICreateRol>()
const handleSaveRole = () =>{

}
}
