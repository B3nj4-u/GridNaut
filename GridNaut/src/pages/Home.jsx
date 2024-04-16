import React from "react";
import "./Home.css";
import Carousel from "../components/Carousel";
import Servicios from "../components/Servicios";
import Nosotros from "../components/Nosotros";
import Separador from "../components/Separador";

function Home() {
  return (
    <div className="home">
      <div id="carrusel">
        <Carousel />
      </div>
      <Separador />
      <div id="servicios">
        <Servicios />
      </div>
      <Separador />
      <div id="sobre-nosotros">
        <Nosotros />
      </div>
    </div>
  );
}

export default Home;
