import React from "react";
import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const token = true; // Simula si el usuario está autenticado o no
  const { total } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> 
          Pizzería Mamma Mia! 
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <Link className="nav-link btn btn-outline-success me-2" aria-current="page" to="/" > 
              Home 🍕 
            </Link>
            {token ? (
              <>
                <Link className="nav-link btn btn-outline-success me-2" to="/profile" 
                  // Redirige a la página de perfil 
                > 
                  Profile 👨‍💻 
                </Link>
                <Link className="nav-link btn btn-outline-success me-2" to="/logout" 
                  // Aquí puedes enlazar a la función de logout en el futuro 
                > 
                  Logout 🔐 
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link btn btn-outline-success me-2" to="/login" 
                  // Ruta para login 
                > 
                  Login 🚪 
                </Link>
                <Link className="nav-link btn btn-outline-success me-2" to="/register" 
                  // Ruta para el registro 
                > 
                  Register 🔐 
                </Link>
              </>
            )}
          </div>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link btn btn-outline-success" to="/cart"> 
              Total: ${total.toLocaleString()} 
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
