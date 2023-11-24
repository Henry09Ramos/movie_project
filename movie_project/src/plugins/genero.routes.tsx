import {BrowserRouter as Routes,Route, BrowserRouter} from 'react-router-dom'
import TableGenero from '../components/Genero/TableGenero'

function App(){
    return (
        <BrowserRouter>
<Routes>
    <Route path="/" element={<TableGenero/>}  />
</Routes>
</BrowserRouter>
    )
}
export default App