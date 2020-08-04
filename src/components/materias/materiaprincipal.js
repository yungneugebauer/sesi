import React from 'react';
import './materiaprincipal.css';

export default function MateriaPrincipal() {
  return (
    <div className="container">
      <div className="alert alert-success" id="titulinho" role="alert">
        Capítulo 1
      </div>
      <button className="btn btn-success" id="print" onClick={window.print}>
        Imprimir
      </button>
    </div>
  );
}