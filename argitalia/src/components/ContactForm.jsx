// src/components/ContactForm.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../styles/ContactForm.css";

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
            alert('Hubo un problema al enviar el formulario.');
        });
    };

    return (
        <div className="container" style={{ backgroundColor: '#f9e79f', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <form onSubmit={handleSubmit} id="Dejanos-tu-mensaje" className="p-4 border rounded shadow">
                        <div className="mb-4 text-center">
                            <h3>Déjanos tu mensaje</h3>
                        </div>
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
                        <button type="submit" className="btn btn-primary w-100">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

