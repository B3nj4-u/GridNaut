import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './Servicios.css';
import ServiciosTarjeta from './ServiciosTarjeta';
import ServiciosModal from './ServiciosModal';
import image1 from './servicios_images/image1.png';
import image2 from './servicios_images/image2.png';
import image3 from './servicios_images/image3.png';
import image4 from './servicios_images/image4.png';
import image5 from './servicios_images/image5.png';
import image6 from './servicios_images/image6.png';

const images = [image1, image2, image3, image4, image5, image6];

const Servicios = () => {
  const [selected, setSelected] = useState(null);

  const services = [
    { id: 1, image: images[0], text: 'Pokemon niñito muerto', description: 'Descripción 1' },
    { id: 2, image: images[1], text: 'Pokemon fetichista del 108', description: 'Descripción 2' },
    { id: 3, image: images[2], text: 'Pokemon waton morao', description: 'Descripción 3' },
    { id: 4, image: images[3], text: 'Pokemon perritu muerto', description: 'Descripción 4' },
    { id: 5, image: images[4], text: 'Pokemon con ojos de diamante wtf', description: 'Descripción 5' },
    { id: 6, image: images[5], text: 'Pokemon cucaracha morida', description: 'Descripción 6' },
  ];

  const handleClick = (id) => {
    setSelected(id);
  };

  const closeModal = () => {
    setSelected(null);
  };

  return (
    <div>
      <h1 className='servicios-h1'      >
        Nuestros Servicios
      </h1>

      <div className="services-container">
        {services.map((service) => (
          <ServiciosTarjeta
            key={service.id}
            image={service.image}
            text={service.text}
            onClick={() => handleClick(service.id)}
          />
        ))}
      </div>

      <AnimatePresence mode='wait'>
        {selected && (
          <ServiciosModal
            image={services[selected - 1].image}
            text={services[selected - 1].text}
            description={services[selected - 1].description}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Servicios;
