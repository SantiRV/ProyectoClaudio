import React from 'react';
import '../styles/Presentation.css';
import logo from '../logos/argitalia (1).png'; // Ajusta la ruta de la imagen del logo

const Presentacion = () => (
    <div className="presentacion-container">
        <img src={logo} alt="Logo Argitalia" className="presentacion-logo" />
        <div className="presentacion-texto">
            <h1 className='Titulo-presentacion'>Argitalia</h1>
            <h2>Ciudadanías</h2>
        </div>
    </div>
);

export default Presentacion;
