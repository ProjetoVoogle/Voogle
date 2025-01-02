import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home.tsx'
import Contato from "../pages/Contato.tsx";
import SeguroPage from "../pages/PaginaSeguro.tsx";

function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Contato" element={<Contato />}/>
                <Route path="/paginaSeguro/:id" element={<SeguroPage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes