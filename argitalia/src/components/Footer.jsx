import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa'; 
import "../styles/Footer.css"; 

const Footer = () => (
    <footer className="bg-dark text-white text-center py-4">
        <div className="container">
            <h5>Contáctanos</h5>
            <div className="d-flex justify-content-center mb-3">
                <div className="me-4">
                    <FaPhoneAlt /> 
                    <span className="ms-2">+39 3773844374</span>
                </div>
                <div className="me-4">
                    <FaEnvelope />
                    <span className="ms-2">
                        <a href="mailto:argitaliaciudadania@gmail.com" className="text-white">argitaliaciudadania@gmail.com</a>
                    </span>
                </div>
                <div className="me-4">
                    <FaMapMarkerAlt />
                    <span className="ms-2">Via Piemonte 9, Guardia Piemontese, Italia</span>
                </div>
                <div>
                    <a href="https://instagram.com/arg.italia" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaInstagram />
                    </a>
                </div>
            </div>
            <div className="mt-3">
                <p>&copy; {new Date().getFullYear()} Argitalia Ciudadanías. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
