import React from 'react';
import Navbar  from './Navbar'
import { BrowserRouter, Router , Route, Routes} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Reportes from './Reportes';
import Propietarios from './Propietarios';
import Visitantes from './Visitantes';
import Productos from './Productos';
import Register from './register'






function App() {
  return (
    <BrowserRouter>
  
    <Navbar />
    <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/Reportes" element={<Reportes />} />
    <Route path="/Productos" element={<Productos />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Propietarios" element={<Propietarios />} />
    <Route path="/Visitantes" element={<Visitantes />} />
    
 
    
    
    </Routes>
  </BrowserRouter>
  );
}
export default App;