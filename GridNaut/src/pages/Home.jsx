import React from 'react';
import './Home.css';
import Carousel from '../components/Carousel';
import Servicios from '../components/Servicios';
import Nosotros from '../components/Nosotros';

function Home() {
  return (
    <div className="home">
      <div id="carrusel">
        <Carousel />
      </div>
      <div id="servicios">
        <Servicios />
      </div>
      <div id="sobre-nosotros">
        <Nosotros />
      </div>
    </div>
  );
}

export default Home;
