import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-columnas">
          <div className="column">
            <h2>Título 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus.
            </p>
          </div>
          <div className="column">
            <h2>Título 2</h2>
            <p>
              Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
              ultricies sed, dolor.
            </p>
          </div>
          <div className="column">
            <h2>Título 3</h2>
            <p>
              Aliquam ultricies justo accumsan ut ut praesent lobortis dapibus
              mauris.
            </p>
          </div>
        </div>
        <p className="derechos">GridNaut 2024, todos los derechos reservados</p>
      </div>
    </>
  );
}

export default Footer;
