import {BrowserRouter, Routes,Route} from 'react-router-dom'
import TableGenero from '../components/Genero/TableGenero'
//  import DataTable from '../components/Genero/listGenero'
import CreateGenero from '../components/Genero/CreateGenero'
import ClientTable from '../components/Client/TableClient'
// import LayoutNav from '../components/Layout'
// import NavMenu from '../components/Layout'
// import CreateClient from '../components/Client/createClient'
// import UpdateClient from '../components/Client/UpdateClient'
// import PruebaForm from '../components/Client/prueba'
import TableMovie from '../components/Movie/TableMovie'
import CreateMovie from '../components/Movie/createMovie'
import TableRentMovie from '../components/RentMovie/TableRentMovie'
import CreateRentMovie from '../components/RentMovie/createRentMovie'

function RoutesGenero(){
    return (
        <BrowserRouter>
<Routes>

    {/* <Route path='/lay' element={<LayoutNav/>} /> */}
    <Route path="/list" element={<TableGenero/>}  />
 <Route path="/"  element={<CreateGenero/>} /> 
    <Route path="/cliente" element={<ClientTable/>} />
     <Route path='/movie' element={< TableMovie/>}  />
     <Route path='/create'  element={<CreateMovie/>} />
     <Route path='/rentmovie' element={<TableRentMovie/>}/>
     <Route path='/rentupdate' element={<CreateRentMovie/>}/>
     {/* <Route path='/update' element={<UpdateRentMovie/>}/> */}


</Routes>

</BrowserRouter>
    )
}
export default RoutesGenero
