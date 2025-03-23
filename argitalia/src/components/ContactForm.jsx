import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../styles/ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            setError('Por favor, introduce un correo electrónico válido.');
            return;
        }

        setIsLoading(true);
        setError('');

        emailjs.send(
            'service_mj9ktui',
            'template_zilqopm',
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            'd8tuhbd7e1Kmk-KuD'
        )
        .then((result) => {
            console.log(result.text);
            alert('¡Formulario enviado correctamente!');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            console.error(error.text);
            setError('Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.');
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="contact-form-container">
            <div className="contact-form-wrapper">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="contact-form-header">
                        <h3>Déjanos tu mensaje</h3>
                    </div>
                    {error && <div className="contact-form-error">{error}</div>}
                    <div className="contact-form-group">
                        <label htmlFor="name" className="contact-form-label">Nombre</label>
                        <input
                            type="text"
                            className="contact-form-input"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="email" className="contact-form-label">Correo Electrónico</label>
                        <input
                            type="email"
                            className="contact-form-input"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="message" className="contact-form-label">Mensaje</label>
                        <textarea
                            className="contact-form-textarea"
                            id="message"
                            name="message"
                            rows="3"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="contact-form-button" disabled={isLoading}>
                        {isLoading ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;