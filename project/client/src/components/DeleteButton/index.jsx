import React from "react";

export default function Delete({onClick}){
    return(
        <button className="btn btn-danger" onClick={onClick}>Eliminar</button>
    )
}