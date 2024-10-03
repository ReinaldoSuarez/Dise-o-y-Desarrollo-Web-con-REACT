import React from "react";
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function Navbar() {
    return (
        
            <div className="headder-top">
                {/* nav */}
                <nav>
                    <div id="logo">
                        <h1><Link to="/"> SAP</Link></h1>
                    </div>
                    <label htmlFor="drop" className="toggle">Menu</label>
                    <input type="checkbox" id="drop" />
                    <ul className="menu mt-2">
                        <li className="active"><Link to="/">INICIO</Link></li>
                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1"><Link to="/Propietarios">PROPIETARIOS</Link></li>
                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1"><Link to="/Visitantes">VISITANTES</Link></li>
                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1"><Link to="/Reportes">REPORTES</Link></li>
                        <li><Link to="/Login">LOGIN</Link></li>
                    </ul>
                </nav>
            </div>
        
    );
}

export default Navbar;
