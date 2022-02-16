import React from "react";
import Submit from "../UpdateButton";
import Delete from "../DeleteButton";

export default function EnterpriseDetail({enterprise}){
    return(
        <tr>
            <td>{enterprise.id}</td>
            <td>{enterprise.name}</td>
            <td>{enterprise.nit}</td>
            <td>{!enterprise.address ? 'N/A' : enterprise.address}</td>
            <td>{!enterprise.phone ? 'N/A' : enterprise.phone}</td>
            <td><Submit onClick={enterprise.onClick}/></td>
            <td><Delete onClick={enterprise.onDelete}/></td>
        </tr>
    );
}