import {BrowserRouter, Routes,Route} from 'react-router-dom'
import TableGenero from '../components/Genero/TableGenero'
//  import DataTable from '../components/Genero/listGenero'
// import CreateGenero from '../components/Genero/createGenero'


function RoutesGenero(){
    return (
        <BrowserRouter>
<Routes>
    <Route path="/" element={<TableGenero/>}  />
    {/* <Route path="/list" element={<DataTable/>} />  */}
    {/* <Route path="/list"  element={<CreateGenero/>} /> */}

</Routes>

</BrowserRouter>
    )
}
export default RoutesGenero
