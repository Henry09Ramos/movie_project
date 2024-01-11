import {BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from '../components/Usuario/Login'
import SignUp from '../components/Usuario/SignUp'
import Home from '../components/home'
import Navbar from '../components/layout'
import TableGenero from '../components/Genero/TableGenero'
import IndexUser from '../components/Usuario/IndexUser'
import TableMovie from '../components/Movie/TableMovie'

import { ProtectedRoute } from '../components/protectedRoute'
import { useAuthStore } from "../store/auth.store";



  
function RoutesLogin(){
    const isAuth = useAuthStore(state => state.isAuth)
    return (
        <BrowserRouter>
<Routes>
    <Route path="/login/sign" element={<Login/>}  />
    <Route path="/user/signup" element={<SignUp></SignUp>}  />
    <Route element={<ProtectedRoute isAllowed={isAuth}/>}>
    <Route path="/home" element={<Home></Home>}  />
    <Route path="/navbar" element={<Navbar></Navbar>}  />
    <Route path="/genero" element={<TableGenero></TableGenero>}  />
    <Route path="/user" element={<IndexUser></IndexUser>}  />
    <Route path="/movie" element={<TableMovie></TableMovie>}  />
   
    </Route>
</Routes>
</BrowserRouter>
    )
}
export default RoutesLogin