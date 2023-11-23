import {BrowserRouter as Routes, Route, BrowserRouter} from 'react-router-dom'
import RolePage from '../components/Rol/TableRol'

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/"  element={<RolePage></RolePage>} />
        </Routes>
        </BrowserRouter>
    )
}
export default App

