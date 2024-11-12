import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/Rent.css';

const Rent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRent, setSelectedRent] = useState(null);

  const rentals = [
    {
      id: 1,
      title: "Alquiler 1",
      images: ["url1.jpg", "url2.jpg"],
    },
    {
      id: 2,
      title: "Alquiler 2",
      images: ["url3.jpg", "url4.jpg"],
    },
    {
      id: 3,
      title: "Alquiler 3",
      images: ["url5.jpg", "url6.jpg"],
    },
    {
      id: 4,
      title: "Alquiler 4",
      images: ["url5.jpg", "url6.jpg"],
    },
    {
      id: 5,
      title: "Alquiler 5",
      images: ["url5.jpg", "url6.jpg"],
    },
    {
      id: 6,
      title: "Alquiler 6",
      images: ["url5.jpg", "url6.jpg"],
    },
  ];

  const openModal = (rent) => {
    setSelectedRent(rent);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRent(null);
  };

  return (
    <div className="container" id='Alquileres-disponibles'>
      <h2 className="text-center my-4">Alquileres Disponibles</h2>
      <div className="row">
        {rentals.map((rent) => (
          <div className="col-md-4 mb-3" key={rent.id}>
            <div className="rent-card p-3 border" onClick={() => openModal(rent)}>
              <h5>{rent.title}</h5>
            </div>
          </div>
        ))}
      </div>

      {selectedRent && (
        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedRent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedRent.images.map((image, index) => (
              <img key={index} src={image} alt="Rental" className="img-fluid mb-2" />
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Rent;

