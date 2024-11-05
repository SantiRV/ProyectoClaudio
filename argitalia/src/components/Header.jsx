// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Argitalia Ciudadanias</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#quienes-somos">Quiénes Somos?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#que-hacemos">Qué Hacemos?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#donde-estamos">Dónde Estamos?</a>
                    </li>
                    <li>
                        <a className='nav-link' href='#Dejanos-tu-mensaje'>Dejanos tu mensaje</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;


