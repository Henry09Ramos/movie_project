import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from '../components/home'
import IndexUser from '../components/Usuario/IndexUser'
import TableGenero from '../components/Genero/TableGenero'


function RoutesHome(){
    return (
        <BrowserRouter>
<Routes>
    <Route path="/home" element={<Home/>}  />
    <Route path="/create" element={<IndexUser/>}  />
    <Route path="/genero" element={<TableGenero/>}  />
 </Routes>
</BrowserRouter>
    )
}
export default RoutesHome