import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './propietarios.css';


function Propietarios (){
    return(
        <mainpropi>
       
<div className="row">
    <div className="col-md-12">
        <div className="card">
            <form className="propietarios" action="#">
                <div className="campo-texto">
                    <input type="text" placeholder="PLACA" />          
                    <input type="text" placeholder="MARCA" />              
                    <input type="text" placeholder="COLOR" />
                    <input type="text" placeholder="NOMBRE" />
                    <input type="text" placeholder="CEDULA" />
                    <input type="text" placeholder="TORRE" />
                    <input type="text" placeholder="APARTAMENTO" />
                    <input type="text" placeholder="# PARQ." />
                </div>
                <div className="contenedor-botones">
                    <button className="boton boton-verde">INGRESAR</button>
                    <button className="boton boton-rojo">SALIDA</button>
                    <button className="boton boton-gris">BORRAR</button>
                </div>
            </form>
        </div>
    </div>

    <div className="col-md-12">
        <div className="card">
            <div className="card-header">
                <h5>DATOS PROPIETARIO INGRESADO</h5>
                <span className="d-block m-t-5">ÚLTIMOS INGRESOS Y SALIDAS</span>
            </div>
            <div className="card-body table-border-style">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Torre #</th>
                                <th>Apartamento</th>
                                <th>Nombre Propietario</th>
                                <th># Cédula</th>
                                <th>Placa</th>
                                <th># Parq.</th>
                                <th>Fecha Ingreso</th>
                                <th>Fecha Salida</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>4</td>
                                <td>4920</td>
                                <td>Otto González López</td>
                                <td>12345678</td>
                                <td>KLN545</td>
                                <td>455</td>
                                <td>04/01/2024 2:45</td>
                                <td>04/01/2024 5:45</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>4920</td>
                                <td>Otto González López</td>
                                <td>12345678</td>
                                <td>KLN545</td>
                                <td>455</td>
                                <td>05/01/2024 8:45</td>
                                <td>05/01/2024 5:45</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>4920</td>
                                <td>Otto González López</td>
                                <td>12345678</td>
                                <td>KLN545</td>
                                <td>455</td>
                                <td>06/01/2024 14:45</td>
                                <td>06/01/2024 18:00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</mainpropi>


    )
}

export  default Propietarios