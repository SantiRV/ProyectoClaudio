import "../styles/Header.css";
import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#112241' }}>
            <a href="#quienes-somos" className="navbar-brand ml-3 text-white">
                Argitalia Ciudadanias</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item mx-3">
                        <a className="nav-link text-white" href="#quienes-somos">Quiénes Somos?</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link text-white" href="#que-hacemos">Qué Hacemos?</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link text-white" href="#donde-estamos">Dónde Estamos?</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className="nav-link text-white" href="#Alquileres-disponibles">Alquileres disponibles</a>
                    </li>
                    <li className="nav-item mx-3">
                        <a className='nav-link text-white' href='#Dejanos-tu-mensaje'>Dejanos tu mensaje</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
