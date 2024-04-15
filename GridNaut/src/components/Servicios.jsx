import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./Servicios.css";
import ServiciosTarjeta from "./ServiciosTarjeta";
import ServiciosModal from "./ServiciosModal";
import image1 from "./servicios_images/image1.png";
import image2 from "./servicios_images/image2.png";
import image3 from "./servicios_images/image3.png";
import image4 from "./servicios_images/image4.png";
import image5 from "./servicios_images/image5.png";
import image6 from "./servicios_images/image6.png";

const images = [image1, image2, image3, image4, image5, image6];

const Servicios = () => {
  const [selected, setSelected] = useState(null);

  const services = [
    {
      id: 1,
      image: images[0],
      text: "Desarrollo de Software",
      description:
        "Desarrollo de Software: Nuestro equipo de expertos en desarrollo de software trabaja en estrecha colaboración con los clientes para entender sus necesidades y transformarlas en soluciones de software eficientes y personalizadas. Ya sea que necesites una aplicación web, móvil o de escritorio, nuestro equipo tiene la experiencia para entregar productos de alta calidad que cumplen con tus requisitos específicos. Utilizamos las últimas tecnologías y metodologías de desarrollo para garantizar que nuestras soluciones sean escalables, seguras y fáciles de mantener.",
    },
    {
      id: 2,
      image: images[1],
      text: "Soporte y Mantenimiento",
      description:
        "Ofrecemos servicios de soporte y mantenimiento de TI para garantizar que tus sistemas funcionen sin problemas y estén actualizados. Nuestro equipo de soporte está disponible las 24 horas del día, los 7 días de la semana, para resolver cualquier problema que pueda surgir. Además, realizamos mantenimiento regular para prevenir problemas antes de que ocurran, lo que incluye actualizaciones de software, copias de seguridad de datos y monitoreo del rendimiento del sistema.",
    },
    {
      id: 3,
      image: images[2],
      text: "Seguridad de TI",
      description:
        "La seguridad de tus sistemas de TI es nuestra máxima prioridad. Nuestros expertos en seguridad de TI evalúan tus sistemas para identificar vulnerabilidades y proponer soluciones para mitigar los riesgos. Implementamos medidas de seguridad robustas, como firewalls, sistemas de detección de intrusiones y cifrado de datos, para proteger tus sistemas contra amenazas cibernéticas.",
    },
    {
      id: 4,
      image: images[3],
      text: "Migración a la Nube",
      description:
        "Te ayudamos a aprovechar los beneficios de la nube, como la escalabilidad, la flexibilidad y el ahorro de costos, migrando tus operaciones y datos a la nube. Nuestro equipo tiene experiencia en trabajar con las principales plataformas de nube y puede manejar todo el proceso de migración, desde la planificación hasta la implementación, garantizando una transición suave con mínima interrupción para tu negocio.",
    },
    {
      id: 5,
      image: images[4],
      text: "Integración de Sistemas",
      description:
        "Nuestros servicios de integración de sistemas te permiten combinar diferentes sistemas de TI para que funcionen juntos de manera eficiente. Ya sea que necesites integrar aplicaciones internas o externas, bases de datos o sistemas heredados, nuestro equipo puede proporcionar soluciones de integración que mejoran la eficiencia operativa y la toma de decisiones.",
    },
    {
      id: 6,
      image: images[5],
      text: "Formación en TI",
      description:
        "Ofrecemos formación en TI para ayudar a tu equipo a mantenerse al día con las últimas tecnologías y sistemas. Nuestros programas de formación están diseñados para ser prácticos e interactivos, y se pueden personalizar para satisfacer las necesidades específicas de tu equipo. Ya sea que necesites formación en un nuevo software, en habilidades de codificación o en seguridad de TI, tenemos los recursos y la experiencia para ayudarte.",
    },
  ];

  const handleClick = (id) => {
    setSelected(id);
  };

  const closeModal = () => {
    setSelected(null);
  };

  return (
    <div>
      <h1 className="servicios-h1">Nuestros Servicios</h1>

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

      <AnimatePresence mode="wait">
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
