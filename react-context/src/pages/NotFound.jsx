import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'; // Si deseas agregar estilos personalizados

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Página No Encontrada</h1>
      <p>Oops! La página que buscas no existe.</p>
      <p>
        Tal vez quieras volver a la <Link to="/">página de inicio</Link>.
      </p>
      <img 
        src="https://example.com/your-image.png" 
        alt="Página no encontrada" 
        className="not-found-image" 
      />
    </div>
  );
};

export default NotFound;
