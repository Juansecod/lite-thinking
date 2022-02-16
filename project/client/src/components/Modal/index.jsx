import React from "react";

export default function Modal({display, title, children}){
    const classDisplay = display ? '' : 'd-none';
    return(
        <div className={`fixed-top m-5 card ${classDisplay}`}>
            <div className="card-header">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}