import React, { useState, useEffect } from "react";
import '../styles/Rent.css';


const Rent = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Cerrar la modal al presionar la tecla "Esc"
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
   
    <div className="rent-container">
       <div className="rent-title">
      <h2 className="text-center mb-4">Alquileres para fijar residencia</h2>
      </div>
      <div className="gallery-container"> 
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt || "Imagen"}
          className="gallery-image"
          onClick={() => openModal(img)}
        />
      ))}

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
            {selectedImage.description && <p className="modal-description">{selectedImage.description}</p>}
          </div>
        </div>
      )}</div>
      <h2 className="text-center mt-4">Importante!</h2>
      <h4 className="text-center mt-4">Las fotos de los departamentos son meramente ilustrativas. Las fotos reales de cada inmueble se envían según la disponibilidad al momento de la consulta.</h4>
    </div>
  );
};

export default Rent;




