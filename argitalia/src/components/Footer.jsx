import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
import "../styles/Footer.css";

const Footer = () => (
    <footer className="footer-container">
        <div className="footer-content">
            <h5 className="footer-title">Contáctanos</h5>
            <div className="footer-icons">
                <div className="footer-icon">
                    <FaPhoneAlt className="footer-icon-item" />
                    <span className="footer-text">+39 3519279465</span>
                </div>
                <div className="footer-icon">
                    <FaEnvelope className="footer-icon-item" />
                    <span className="footer-text">
                        <a href="mailto:argitaliaciudadania@gmail.com" className="footer-link">argitaliaciudadania@gmail.com</a>
                    </span>
                </div>
                <div className="footer-icon">
                    <FaMapMarkerAlt className="footer-icon-item" />
                    <span className="footer-text">Via Piemonte 9, Guardia Piemontese, Italia</span>
                </div>
                <div className="footer-icon">
                    <a href="https://instagram.com/arg.italia" target="_blank" rel="noopener noreferrer" className="footer-link">
                        <FaInstagram className="footer-icon-item" />
                    </a>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Argitalia Ciudadanías. Todos los derechos reservados.</p>
        </div>
    </footer>
);

export default Footer;
