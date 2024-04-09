import React from "react";
import NosotrosTarjeta from "./NosotrosTarjeta";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <>
      <h1 className="nosotros-h1">Sobre Nosotros</h1>
      <div className="nosotros-texto">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae
          erat vulputate, semper arcu a, aliquet lorem. Nulla facilisi. Sed
          euismod, nunc et gravida. Donec a diam lectus. Sed sit amet ipsum
          mauris. Maecenas congue ligula ac quam viverra nec consectetur ante
          hendrerit.
        </p>

        <p>
          Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit
          amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia
          consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <p>
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
        </p>
      </div>

      <div className="nosotros">
        <NosotrosTarjeta
          icono="🎯"
          titulo="Misión"
          texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque vitae erat vulputate, semper arcu a, aliquet lorem.
          Nulla facilisi. Sed euismod, nunc et gravida.
          Donec a diam lectus. Sed sit amet ipsum mauris.
          Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit."
        />
        <NosotrosTarjeta
          icono="🌟"
          titulo="Visión"
          texto="Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet.
          Quisque rutrum. Aenean imperdiet.
          Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          Nam eget dui. Etiam rhoncus."
        />
        <NosotrosTarjeta
          icono="💖"
          titulo="Valores"
          texto="Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet.
          Quisque rutrum. Aenean imperdiet."
        />
      </div>
    </>
  );
};

export default Nosotros;
