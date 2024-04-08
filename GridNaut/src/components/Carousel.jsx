import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Carousel.css';
import image1 from './carousel_images/image1.jpg';
import image2 from './carousel_images/image2.jpg';
import image3 from './carousel_images/image3.jpg';

const images = [image1, image2, image3];

const Carousel = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((current + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [current]);

    const handleContactClick = () => {
        navigate('/contactanos');
    };

    return (
        <div className="carousel">
            <img src={images[current]} alt="" className="carousel-image" />
            <div className="carousel-button-container">
                <motion.button onClick={handleContactClick} className="carousel-button"
                  whileHover={{ 
                    scale: [1, 1.1, 1], // Oscila entre el tamaño normal y un 10% más grande
                    transition: { repeat: Infinity, duration: 0.5 } // Repite la animación infinitamente
                  }}
                >
                  Contáctanos
                </motion.button>
            </div>
        </div>
    );
};

export default Carousel;
