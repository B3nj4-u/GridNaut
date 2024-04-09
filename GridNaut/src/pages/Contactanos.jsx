import React from "react";
import ContactanosFormulario from "../components/ContactanosFormulario";
import "./Contactanos.css";

function Contactanos() {
  return (
    <>
    <h1 className="contacto-h1">¡Estamos en contacto!</h1>
      <div className="contacto-formulario">
        <ContactanosFormulario />
      </div>
    </>
  );
}

export default Contactanos;
