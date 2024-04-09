import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpinner } from "react-icons/fa";
import "./ContactanosFormulario.css";

const ContactanosFormulario = () => {
  const [loading, setLoading] = useState(false);
  const [telefono, setTelefono] = useState("");
  const handleTelefonoChange = (event) => {
    const value = event.target.value;
    const formattedValue = value.replace(/[^0-9]/g, "");
    setTelefono(formattedValue);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_gjcwy98",
        "template_t73b13b",
        e.target,
        "UTOnoaFzvgtc3sJp8"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Correo enviado con éxito!");
          setTimeout(() => setLoading(false), 200);
        },
        (error) => {
          console.log(error.text);
          window.alert("Ocurrió un error al enviar el correo.");
          setTimeout(() => setLoading(false), 200);
        }
      );
  };

  return (
    <motion.div
      className="contactanos-formulario"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <form onSubmit={sendEmail}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
        <label htmlFor="numero">Número Telefónico:</label>
        <input
          type="tel"
          id="numero"
          name="numero"
          value={telefono}
          onChange={handleTelefonoChange}
          required
        />
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required></textarea>
        <motion.input
          type="submit"
          value="Enviar"
          animate={{ scale: loading ? 1.1 : 1 }}
        />
      </form>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{  duration: 1 }}
            exit={{ opacity: 0 }}
            style={{ marginTop: "10px" }}
          >
            <FaSpinner size={30} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactanosFormulario;
