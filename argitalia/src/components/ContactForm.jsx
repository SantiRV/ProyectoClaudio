// src/components/ContactForm.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'YOUR_SERVICE_ID',         // Reemplaza con tu Service ID
            'YOUR_TEMPLATE_ID',        // Reemplaza con tu Template ID
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            'YOUR_USER_ID'             // Reemplaza con tu User ID
        )
        .then((result) => {
            console.log(result.text);
            alert('¡Formulario enviado correctamente!');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            console.error(error.text);
            alert('Hubo un problema al enviar el formulario.');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
};

export default ContactForm;

