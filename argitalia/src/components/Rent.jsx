import React, { useState } from 'react';
import Alquiler1 from '../img-alquileres/Alquiler1.jpeg';
import Alquiler2 from '../img-alquileres/Alquiler2.jpeg';
import Alquiler3 from '../img-alquileres/Alquiler3.jpeg';
import Alquiler4 from '../img-alquileres/Alquiler4.jpeg';
import Alquiler5 from '../img-alquileres/Alquiler5.jpeg';
import Alquiler6 from '../img-alquileres/Alquiler6.jpeg';
import '../styles/Rent.css';

const rentals = [
  {
    title: "Importante!",
    images: [Alquiler1, Alquiler2, Alquiler3, Alquiler4, Alquiler5, Alquiler6],
    text: "Las fotos de los departamentos son meramente ilustrativas. Las fotos reales de cada inmueble se envían según la disponibilidad al momento de la consulta."
  },
];

const Rent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="rent-container">
      <div className='container'>
        
        <div className='rentals-grid'>
          
          {rentals.map((rental, index) => (
            <div key={index} className='rental-card'>
              <h2 className='rental-title'>Alquileres para fijar residencia en Italia</h2>
              <h3><span>{rental.title}</span></h3>
              <p>{rental.text}</p>
              <button className='modal-button' onClick={() => setShowModal(true)}>Ver imágenes</button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={() => setShowModal(false)}>&times;</span>
            <h3>Imágenes de Alquileres</h3>
            <div className="modal-images">
              {rentals[0].images.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`Alquiler ${index}`} 
                  className="modal-image"
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      
      {selectedImage && (
        <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Alquiler Ampliado" className="fullscreen-image" />
        </div>
      )}
    </section>
  );
};

export default Rent;
