import React from "react";

export default function Headline(props){
    const openModal = () => {
      props.openModal('Crear Empresa');
    };

    return (
      <header className="mt-3">
        <div className="d-flex justify-content-between">
          <h1>{ props.children }</h1>
          <button className="mt-3 mb-3 btn btn-success" onClick={openModal}>Crear empresa</button>
        </div>
      </header>
    )
  };
