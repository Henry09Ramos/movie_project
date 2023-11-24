import {BrowserRouter, Routes,Route} from 'react-router-dom'
import TableGenero from '../components/Genero/TableGenero'

function RoutesGenero(){
    return (
        <BrowserRouter>
<Routes>
    <Route path="/" element={<TableGenero></TableGenero>}  />
</Routes>
</BrowserRouter>
    )
}
export default RoutesGenero