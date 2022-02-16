import React from "react";

export default function App({children}){
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>NIT</th>
                    <th>Dirección</th>
                    <th>Telefono</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>   
                {children}
            </tbody> 
        </table>
    )
  };