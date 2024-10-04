import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './login.css'

export function Login() {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate()
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
        .then(res => {
            console.log(res);
            
            if (res.status === 200) {
                alert(' INGRESANDO AL SISTEMA SAP')
                navigate('/productos'); // Redirige a la página de productos
            }
        })
        .catch(err => {
            console.log(err);
            alert('USUARIO NO REGISTRADO')
            
        });
};


    return(
        <mainlogin>
            <form onSubmit={handleSubmit}>
                <div className="inside">
                    
                    <h1>SISTEMA AUTOMATICO DE PARQUEADEROS</h1>
                    
                    <h2>INICIAR SESIÓN</h2>
                    <input type="email" placeholder="email" onChange ={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="contraseña" onChange ={e => setPassword(e.target.value)}/>
                </div>
                <button>INGRESAR</button>

                <p>¿No tienes cuenta? <a href="/register">Regístrate aquí</a></p>
            
            </form>
            
        </mainlogin>
    )
    
}
export default Login;