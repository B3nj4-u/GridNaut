import React from "react";
import NosotrosTarjeta from "./NosotrosTarjeta";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <>
      <h1 className="nosotros-h1">Sobre Nosotros</h1>
      <div className="nosotros-texto">
        <p>
          Somos una empresa líder en tecnología de la información (TI)
          comprometida con la innovación y la excelencia. Con años de
          experiencia en el sector, hemos ayudado a numerosas organizaciones a
          transformar sus operaciones a través de soluciones de TI
          personalizadas y efectivas. Nuestro equipo de profesionales altamente
          calificados y apasionados por la tecnología trabaja incansablemente
          para proporcionar servicios de alta calidad que superen las
          expectativas de nuestros clientes. Ya sea que necesites desarrollo de
          software, migración a la nube, seguridad de TI o cualquier otro
          servicio de TI, estamos aquí para ayudarte a alcanzar tus objetivos de
          negocio.
        </p>
      </div>

      <div className="nosotros">
        <NosotrosTarjeta
          icono="🎯"
          titulo="Misión"
          texto="Nuestra misión es empoderar a las organizaciones a través de soluciones de TI innovadoras y confiables. Nos esforzamos por entender las necesidades únicas de cada cliente y proporcionar soluciones que les ayuden a mejorar su eficiencia, productividad y competitividad en el mercado. Creemos en la creación de relaciones a largo plazo con nuestros clientes basadas en la confianza, la integridad y la satisfacción del cliente."
        />
        <NosotrosTarjeta
          icono="🌟"
          titulo="Visión"
          texto="Nuestra visión es ser reconocidos como un socio de TI de confianza y líder en la industria, conocidos por nuestra excelencia técnica, compromiso con la innovación y dedicación al éxito de nuestros clientes. Aspiramos a ser pioneros en la adopción de nuevas tecnologías y a establecer nuevos estándares en la prestación de servicios de TI."
        />
        <NosotrosTarjeta
          icono="💖"
          titulo="Valores"
          texto={
            <>
              <p>
                <strong>Integridad:</strong> Nos comprometemos a actuar con
                honestidad y transparencia en todas nuestras interacciones.
              </p>
              <p>
                <strong>Excelencia:</strong> Nos esforzamos por superar las
                expectativas de nuestros clientes en cada proyecto que
                emprendemos.
              </p>
              <p>
                <strong>Colaboración:</strong> Creemos en el poder del trabajo
                en equipo y la colaboración para lograr resultados
                excepcionales.
              </p>
              <p>
                <strong>Innovación:</strong> Fomentamos un ambiente de
                creatividad y exploración para desarrollar soluciones de TI
                vanguardistas.
              </p>
            </>
          }
        />
      </div>
    </>
  );
};

export default Nosotros;
